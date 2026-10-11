// tanggal & jam (WIB)
function tick(){
  const d=new Date();
  const p=n=>String(n).padStart(2,'0');
  document.getElementById('tgl').textContent='📅 '+p(d.getDate())+'-'+p(d.getMonth()+1)+'-'+d.getFullYear();
  document.getElementById('jam').textContent='🕒 '+p(d.getHours())+':'+p(d.getMinutes())+':'+p(d.getSeconds())+' WIB';
}
tick();setInterval(tick,1000);
// filter galeri (Semua / Foto / Video)
const fbtns=document.querySelectorAll('#filters button');
fbtns.forEach(b=>b.addEventListener('click',()=>{
  fbtns.forEach(x=>x.classList.remove('on'));b.classList.add('on');
  const f=b.dataset.f;let shown=0;
  document.querySelectorAll('#galeri-grid .gcard').forEach(c=>{
    const ok=f==='all'||c.dataset.t===f;c.style.display=ok?'':'none';if(ok)shown++;
  });
  document.getElementById('galeri-empty').hidden=shown>0;
}));
// menu mobile
const menu=document.getElementById('menu');
document.getElementById('burger').onclick=()=>menu.classList.toggle('open');
document.querySelectorAll('.has-sub>a').forEach(a=>a.addEventListener('click',e=>{
  if(window.innerWidth<=1180){e.preventDefault();a.parentElement.classList.toggle('open');}
}));
