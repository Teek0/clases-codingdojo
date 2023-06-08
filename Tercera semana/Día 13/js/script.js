async function obtenerImagenes(event){
    event.preventDefault();

    let numeroImagenes = document.querySelector("#numeroDeImagenes").value;
    let url=`https://dog.ceo/api/breeds/image/random/${numeroImagenes}`;

    let settings={
        method:'GET'
    };

    let response = await fetch (url,settings);
    //console.log(response);
    let info = await response.json();
    //console.log(info);

    let resultados=document.querySelector(".resultados");
    resultados.innerHTML="";

    for (let i=0; i<info.message.length; i++){
        resultados.innerHTML+=`
        <div class="imagen">
            <img src="${info.message[i]}" width="300" alt="Imagen de un perro">
        </div>
        `
    }

}