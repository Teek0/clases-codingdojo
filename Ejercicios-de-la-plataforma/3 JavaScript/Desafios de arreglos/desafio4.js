/*Arreglo invertido
Escribe una función que invierta los valores de un arreglo y los devuelva. */
function reverse(arr) {
    // tu código aquí
    let arrTemp=[];
    for(let i=arr.length;i>=0;i--){
        arrTemp.push(arr[i]);
    }
    arr=arrTemp;
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]
