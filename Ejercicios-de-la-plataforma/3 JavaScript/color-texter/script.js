var pTags = document.querySelectorAll(".p");

function getColor(elemento){
    console.log(elemento.value);
    for(let i = 0; i<pTags.length; i++){
    pTags[i].style.color = elemento.value;
    }
}

var colors = document.querySelectorAll(".colores");
    
function applyColors(){
    for (let i = 0; i<colors.length; i++) {
        colors[i].style.color = colors[i].innerText;
    }
}
