
document.getElementById("laserCat").addEventListener("mouseover",function(){
    document.querySelectorAll('.work').forEach(function(el) {
        el.style.display = 'none';
     });
    
    document.getElementById('laserCat').style.display="block";
    document.getElementById("laserCat").style.width="80%";}
);
document.getElementById("horiseon").addEventListener("mouseover",function(){
    document.querySelectorAll('.work').forEach(function(el) {
        el.style.display = 'none';
     });
    
    document.getElementById('horiseon').style.display="block";
    document.getElementById("horiseon").style.width="80%";}
);
document.getElementById("laserCat").addEventListener("mouseout",function(){
    document.querySelectorAll('.work').forEach(function(el) {
        el.style.display = 'block';
     });
    document.getElementById("laserCat").style.width="40%";}
);
document.getElementById("horiseon").addEventListener("mouseout",function(){
    document.querySelectorAll('.work').forEach(function(el) {
        el.style.display = 'block';
     });
    document.getElementById("horiseon").style.width="40%";}
);