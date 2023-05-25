let contador=0;

function agregarAlContador(){
    contador++;
    console.log(contador);
}

function mensaje(nombre){
    console.log("Hola ", nombre);
    alert("Hola " + nombre + ", estás a punto de cerrar sesión")
}

function mostrarPerfil(elemento){
    elemento.style.color ="blue";
}
//onmouseover -> al entrar con el mouse
//onmouseout  -> detecta la salida del cursor
function mPerfil(element){
    element.style.color="white";
}
