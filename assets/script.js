document.getElementById("laserCat").addEventListener("mouseover",function(){
    document.getElementById('horiseon').style.display="none";
    document.getElementById("laserCat").style.width="80%"
}
);
document.getElementById("laserCat").addEventListener("mouseout",function(){
    document.getElementById('horiseon').style.display="block";
    document.getElementById("laserCat").style.width="40%"
}
);
document.getElementById("horiseon").addEventListener("mouseover",function(){
    document.getElementById('laserCat').style.display="none";
    document.getElementById("horiseon").style.width="80%"
}
);
document.getElementById("horiseon").addEventListener("mouseout",function(){
    document.getElementById('laserCat').style.display="block";
    document.getElementById("horiseon").style.width="40%"
}
);