CREATE TABLE IF NOT EXISTS cortex_payment_events (
  payment_id text PRIMARY KEY,
  mission_ref text NOT NULL,
  amount_ttc numeric(18, 2) NOT NULL CHECK (amount_ttc > 0),
  currency char(3) NOT NULL,
  amount_ht numeric(18, 2) NOT NULL CHECK (amount_ht >= 0),
  commission_ht numeric(18, 2) NOT NULL CHECK (commission_ht >= 0),
  escrow_ht numeric(18, 2) NOT NULL CHECK (escrow_ht >= 0),
  received_at timestamptz NOT NULL,
  inserted_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS cortex_mission_claims (
  mission_ref text PRIMARY KEY,
  status text NOT NULL CHECK (status IN ('en_attente', 'attribuée')),
  current_expert_id text,
  current_response text NOT NULL DEFAULT 'pending'
    CHECK (current_response IN ('pending', 'accepted', 'declined')),
  assigned_expert_id text,
  deadline_at timestamptz NOT NULL,
  claim_token_hash char(64),
  claimed_at timestamptz,
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS cortex_mission_claims_deadline_idx
  ON cortex_mission_claims (deadline_at)
  WHERE status = 'en_attente';
