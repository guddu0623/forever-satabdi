const btn=document.getElementById('openBtn');
const c=document.getElementById('content');
const p=document.getElementById('player');
const imgs=['assets/photo1.jpg','assets/photo2.jpg','assets/photo3.jpg','assets/photo4.jpg','assets/photo5.jpg','assets/photo6.jpg'];
let i=0;
btn.onclick=()=>{
 c.style.display='block';
 p.src='https://www.youtube.com/embed/0OGguI0uDfE?autoplay=1';
 setInterval(()=>{i=(i+1)%imgs.length;document.getElementById('slide').src=imgs[i]},2500);
 btn.style.display='none';
};
