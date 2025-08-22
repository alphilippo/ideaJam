// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href');
    if(id && id.length>1){
      e.preventDefault();
      document.querySelector(id).scrollIntoView({behavior:'smooth'});
    }
  });
});

// Countdown (Africa/Dakar ~ UTC)
(function(){
  const el = document.getElementById('countdown');
  if(!el) return;
  const target = new Date(el.getAttribute('data-target')).getTime();
  const vals = el.querySelectorAll('.value');
  function tick(){
    const now = Date.now();
    const diff = Math.max(0, target - now);
    const d = Math.floor(diff/86400000);
    const h = Math.floor((diff%86400000)/3600000);
    const m = Math.floor((diff%3600000)/60000);
    const s = Math.floor((diff%60000)/1000);
    const arr = [d,h,m,s].map(n=>String(n).padStart(2,'0'));
    vals.forEach((v,i)=> v.textContent = arr[i] );
  }
  tick(); setInterval(tick,1000);
})();

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
