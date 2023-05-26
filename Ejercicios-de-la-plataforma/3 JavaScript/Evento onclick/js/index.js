function logout(button){
    if (button.innerHTML=="Login") {
        button.innerText="Logout";
    }
    else {
        button.innerText="Login";
    }
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
    alert("Ninja was liked");
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

function seleccionarPais(elemento){
    alert(elemento.value);
}

function desplegarTexto(element){
    console.log(element.value);
}