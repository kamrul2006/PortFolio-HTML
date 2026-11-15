var R=["React apps","fast websites","full stack projects","clean interfaces"],i=0,el=document.getElementById('rt');

if(!matchMedia('(prefers-reduced-motion:reduce)').matches)setInterval(function(){i=(i+1)%R.length;el.textContent=R[i]},2200);
document.getElementById('f').addEventListener('submit',function(ev){ev.preventDefault();
    
var n=document.getElementById('n').value,e=document.getElementById('e').value,m=document.getElementById('m').value;
location.href='mailto:kamrulislamapurba@gmail.com?subject='+encodeURIComponent('Message from '+n)+'&body='+encodeURIComponent(m+'\n\nReply to: '+e);});
