document.addEventListener("DOMContentLoaded",()=>{
  const burger=document.getElementById("burgerBtn");
  const nav=document.getElementById("mainNav");
  if(burger){
    burger.addEventListener("click",()=>nav.classList.toggle("open"));
  }
});
