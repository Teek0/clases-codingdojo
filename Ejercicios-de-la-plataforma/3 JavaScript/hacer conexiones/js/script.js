function editName(elemento){
    elemento.closest(".profileContent").querySelector(".cambiarNombre").classList.remove("hide");
}

function aceptarNombre(elemento){
    elemento.closest(".profileContent").querySelector("h2").innerText = elemento.closest(".profileContent").querySelector(".nameEdit").value;
    elemento.closest(".profileContent").querySelector(".cambiarNombre").classList.add("hide");
}
function cancelarNombre(elemento){
    elemento.closest(".profileContent").querySelector(".cambiarNombre").classList.add("hide");
}

function request(elemento){
    console.log(elemento.closest(".persona"));
    console.log(elemento.classList[0]);

    let num = parseInt(elemento.closest(".connects").querySelector(".connectionsNumber").innerHTML)-1;
    elemento.closest(".connects").querySelector(".connectionsNumber").innerHTML= num;
    elemento.closest(".persona").remove();
    
    if(elemento.classList[0]=="accept-circle"){
        document.getElementById("numConnectionsTotal").innerText=parseInt(document.getElementById("connectionsTotal").innerText)+1;
        console.log(elemento.closest(".persona").querySelector("ul"));
        console.log(document.getElementById("connectionsTotal"));
        document.getElementById("connectionsTotal").innerHTML+="<div><ul>"+elemento.closest(".persona").querySelector("ul").innerHTML+"</ul></div>"
    }
}