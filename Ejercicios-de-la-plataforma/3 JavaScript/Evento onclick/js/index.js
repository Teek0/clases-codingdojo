function logout(button){
    button.innerText="Logout";
}
function addDefDel(button){
    button.remove();
}
function likeAlert(elemento){
    alert("Ninja was liked");
    let num = parseInt(elemento.innerHTML);
    num++;
    elemento.innerHTML= num+" likes";
}