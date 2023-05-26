var animalImg=document.querySelector('#fav-animal');
console.log(animalImg.src);

function pickCat(element){
    animalImg.src="img/gato.jpeg";
}
function pickDog(element){
    animalImg.src="img/perro.jpeg";
}
