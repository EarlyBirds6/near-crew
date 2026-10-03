const modal=document.getElementById("walletModal");
const openers=[document.getElementById("connectBtn"),document.getElementById("mintBtn"),document.getElementById("communityBtn")];
const close=()=>modal.classList.remove("open");
openers.forEach(b=>b?.addEventListener("click",()=>modal.classList.add("open")));
document.getElementById("closeModal")?.addEventListener("click",close);
document.getElementById("closeModalBtn")?.addEventListener("click",close);
document.querySelectorAll(".wallet-option").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.getElementById("walletStatus").textContent=`${btn.dataset.wallet} selected — connect your NEAR integration here.`;
  });
});
document.addEventListener("keydown",e=>{if(e.key==="Escape")close()});

const target=Date.now()+((7*24+18)*60*60+42*60+11)*1000;
function tick(){
  let d=Math.max(0,target-Date.now());
  const day=Math.floor(d/86400000); d%=86400000;
  const hr=Math.floor(d/3600000); d%=3600000;
  const min=Math.floor(d/60000); const sec=Math.floor((d%60000)/1000);
  document.getElementById("days").textContent=String(day).padStart(2,"0");
  document.getElementById("hours").textContent=String(hr).padStart(2,"0");
  document.getElementById("minutes").textContent=String(min).padStart(2,"0");
  document.getElementById("seconds").textContent=String(sec).padStart(2,"0");
}
tick();setInterval(tick,1000);

const claimed=document.getElementById("claimed");
let n=964;
setInterval(()=>{ if(n<1000 && Math.random()<.08){n++;claimed.textContent=n;} },5000);
