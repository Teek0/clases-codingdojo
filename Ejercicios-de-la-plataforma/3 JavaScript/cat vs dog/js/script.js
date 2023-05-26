var animalImg=document.querySelector('#fav-animal');
console.log(animalImg.src);

function pickCat(){
    animalImg.src="img/gato.jpeg";
}
function pickDog(){
    animalImg.src="img/perro.jpeg";
}