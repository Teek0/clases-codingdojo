function addLike(elemento){
    let num = parseInt(elemento.closest(".top").querySelector(".numLikes").innerText);
    num++;
    elemento.closest(".top").querySelector(".numLikes").innerText = num + " like(s)";
}
