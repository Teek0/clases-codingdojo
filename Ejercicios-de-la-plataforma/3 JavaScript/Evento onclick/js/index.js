function logout(button){
    if (button.innerHTML=="Login") {

        alert("Has deslogeado exitosamente");
        button.innerText="Logout";
    }
    else {
        button.innerText="Login";
        alert("Bienvenido de vuelta :)");
    }
}

function search(){
    setTimeout(alertaDeBusqueda,5000); //asincrono
    alert("Buscando...");
}

function alertaDeBusqueda(){
    let mensaje=document.querySelector(".search");
    alert("Tu busqueda es la siguiente: " + mensaje.value);
}

function addDefinition(){
    let contenedor=document.querySelector(".words");
    contenedor.innerHTML+=
            `<article class="tarjeta">
                <div class="palabra">
                    <h2>Ninja</h2>
                    <h3 class="italic">noun</h3>
                    <p>Plural: <span class="italic">ninjas</span></p>
                    <button onclick="likeAlert(this)">0 likes</button>
                </div>
                <p>A practitioner skilled in the <span class="linked">Japanese</span> art of <span class="linked">ninjutsu</span></p>
            </article>`;
}
function likeAlert(elemento){
    //alert("Ninja was liked");
    let num = parseInt(elemento.innerHTML);
    num++;
    elemento.innerHTML= num + " likes";
}
function deleted(elemento){
    elemento.closest(".interiorAside").remove();
}
function hideThis(elemento){
    elemento.closest(".interiorAside").classList.add("hide");
}
function showThis(){
    document.getElementById("boxyBox").classList.remove("hide");
}
/*---------- SELECT PAIS --------------*/
var pais=document.querySelector('#bandera');

function seleccionarPais(elemento){
    if(elemento.value=="CH")
    {pais.src="img/chile.png";}
    else if(elemento.value=="MX")
    {pais.src="img/mexico.png";}
    else if(elemento.value=="PE")
    {pais.src="img/peru.png";}
    else if(elemento.value=="US")
    {pais.src="img/USA.png";}
    document.getElementById("main").classList.add("opacidad");
    document.getElementById("header").classList.add("opacidad");
    document.getElementById("modal").classList.remove("hide");
}

function hideModal(elemento){
    document.getElementById("main").classList.remove("opacidad");
    document.getElementById("header").classList.remove("opacidad");
    elemento.closest("#modal").classList.add("hide");
}
/*---------- END SELECT PAIS --------------*/

function desplegarTexto(element){
    console.log(element.value);
}

