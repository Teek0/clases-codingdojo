function alertaTop(elemento){
    //console.log(elemento.innerText);
    alert("Loading weather report.\nYou have selected the city of "+ elemento.innerText + ".");
}
function acceptCookies(elemento){
    //console.log(elemento);
    //console.log(elemento.closest(".cookiesDiv"));
    elemento.closest(".cookiesDiv").remove();
}
var degreeIni="°C";
function transDeg(elemento){
    //console.log(elemento.value);
    //console.log(document.querySelectorAll(".temMin"));
    let temperaturasMAX=document.querySelectorAll(".temMax");
    let temperaturasMIN=document.querySelectorAll(".temMin");
    if(elemento.value=="°C" && elemento.value!=degreeIni){
        for (let i = 0; i < temperaturasMIN.length; i++) {
            document.querySelectorAll(".temMax")[i].innerText = Math.round((parseInt(temperaturasMAX[i].innerText) - 32) / 1.8)+"°";
            document.querySelectorAll(".temMin")[i].innerText = Math.round((parseInt(temperaturasMIN[i].innerText) - 32) / 1.8)+"°";
        }
        degreeIni="°C";
    }
    else if (elemento.value=="°F" && elemento.value!=degreeIni) {
        for (let i = 0; i < temperaturasMIN.length; i++) {
            document.querySelectorAll(".temMax")[i].innerText = Math.round((parseInt(temperaturasMAX[i].innerText) * 1.8) + 32)+"°";
            document.querySelectorAll(".temMin")[i].innerText = Math.round((parseInt(temperaturasMIN[i].innerText) * 1.8) + 32)+"°";
        }
        degreeIni="°F";
    }
}