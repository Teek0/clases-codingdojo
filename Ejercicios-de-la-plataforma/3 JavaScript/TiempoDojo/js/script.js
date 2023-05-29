function alertaTop(elemento){
    alert("Loading weather report.\nYou have selected the city of "+ elemento.innerText + ".");
}
function acceptCookies(elemento){
    elemento.closest(".cookiesDiv").remove();
}
var degreeIni="°C";
function transDeg(elemento){
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