#!/usr/bin/env bash
set -euo pipefail

: "${BASE_URL:?Set BASE_URL, e.g. https://automation.e-metalabs.com}"
: "${PAYTECH_API_SECRET:?Set PAYTECH_API_SECRET}"
: "${CLAIM_TOKEN:?Set a fresh, signed SLA claim token}"
: "${MISSION_REF:?Set the mission reference to test}"
: "${CONFIRM_TEST_DATA_MUTATION:?Set CONFIRM_TEST_DATA_MUTATION=YES only for an isolated test mission}"
[[ "$CONFIRM_TEST_DATA_MUTATION" == "YES" ]] || {
  echo "Refusing to send a paid IPN or consume a claim token without explicit test-data confirmation." >&2
  exit 1
}
[[ "$MISSION_REF" =~ ^MIS-[0-9]{4}-[0-9]{4,}$ ]] || {
  echo "MISSION_REF must match MIS-YYYY-NNNN." >&2
  exit 1
}

payload=$(printf '{"transaction_id":"curl-test-%s","mission_ref":"%s","amount_ttc":118000,"currency":"XOF","status":"success"}' "$(date +%s)" "$MISSION_REF")
signature=$(printf '%s' "$payload" | openssl dgst -sha256 -hmac "$PAYTECH_API_SECRET" | sed 's/^.* //')

echo "Testing valid PayTech HMAC (expect HTTP 200)..."
valid_status=$(curl --silent --show-error --output /dev/null --write-out '%{http_code}' \
  --request POST "$BASE_URL/webhook/paytech-ipn" \
  --header 'Content-Type: application/json' \
  --header "X-PayTech-Signature: $signature" \
  --data-binary "$payload")
test "$valid_status" = "200" || { echo "Expected 200, got $valid_status" >&2; exit 1; }

echo "Testing invalid PayTech HMAC (expect HTTP 403)..."
invalid_status=$(curl --silent --show-error --output /dev/null --write-out '%{http_code}' \
  --request POST "$BASE_URL/webhook/paytech-ipn" \
  --header 'Content-Type: application/json' \
  --header 'X-PayTech-Signature: 00' \
  --data-binary "$payload")
test "$invalid_status" = "403" || { echo "Expected 403, got $invalid_status" >&2; exit 1; }

tmpdir=$(mktemp -d)
trap 'rm -f "$tmpdir/claim-a" "$tmpdir/claim-b" "$tmpdir/status-a" "$tmpdir/status-b"; rmdir "$tmpdir"' EXIT
claim_url="$BASE_URL/webhook/claim-mission?token=$CLAIM_TOKEN"
confirm_status=$(curl --silent --show-error --output /dev/null --write-out '%{http_code}' "$claim_url")
test "$confirm_status" = "200" || { echo "Expected claim confirmation page HTTP 200, got $confirm_status" >&2; exit 1; }

echo "Testing the atomic SLA claim lock with two concurrent requests (expect one 200 and one 409)..."
curl --silent --show-error --output "$tmpdir/claim-a" --write-out '%{http_code}' \
  --request POST "$claim_url" \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --data-urlencode "token=$CLAIM_TOKEN" > "$tmpdir/status-a" &
pid_a=$!
curl --silent --show-error --output "$tmpdir/claim-b" --write-out '%{http_code}' \
  --request POST "$claim_url" \
  --header 'Content-Type: application/x-www-form-urlencoded' \
  --data-urlencode "token=$CLAIM_TOKEN" > "$tmpdir/status-b" &
pid_b=$!
wait "$pid_a"
wait "$pid_b"

status_a=$(cat "$tmpdir/status-a")
status_b=$(cat "$tmpdir/status-b")
if ! { [ "$status_a" = "200" ] && [ "$status_b" = "409" ]; } &&
     ! { [ "$status_a" = "409" ] && [ "$status_b" = "200" ]; }; then
  echo "Expected exactly one successful claim and one conflict; got $status_a and $status_b" >&2
  exit 1
fi

echo "All webhook checks passed."
