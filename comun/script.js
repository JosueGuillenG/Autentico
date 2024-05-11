function botonCambio(n){
    document.getElementById("1").style.height = "0px";
    document.getElementById("1-slide").style.visibility = "hidden";
    document.getElementById("2").style.height = "0px";
    document.getElementById("2-slide").style.visibility = "hidden";
    document.getElementById("3").style.height = "0px";
    document.getElementById("3-slide").style.visibility = "hidden";
    
    document.getElementById(n).style.height = "8px";
    document.getElementById(n+"-slide").style.visibility = "visible";
}