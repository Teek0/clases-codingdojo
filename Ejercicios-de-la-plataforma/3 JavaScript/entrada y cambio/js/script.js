//  EJEMPLO 1 - OnImput
var nameSpan=document.querySelector("#name");
function setName(elemento){
    nameSpan.innerText=elemento.value;
}
//  EJEMPLO 2 - OnSelect
var foodToOrder = "Pizza";
function pickFood(elemento){
    console.log("The food is " + elemento.value);
    foodToOrder=elemento.value;
}
function order(){
    alert("Ordering a " + foodToOrder);
}