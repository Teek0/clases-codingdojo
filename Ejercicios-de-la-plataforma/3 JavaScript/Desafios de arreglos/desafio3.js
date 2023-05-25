/*Mejor que el promedio
Dado un arreglo de números, devuelve un recuento de cuántos de los números son mayores que el promedio.*/
function betterThanAverage(arr) {
    var sum = 0;
    // calcula el promedio
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    sum/=arr.length;
    var count = 0
    // cuenmta cuánmtas variables son mayores que el promedio
    for(i=0;i<arr.length;i++){
        if(arr[i]>sum){
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta
