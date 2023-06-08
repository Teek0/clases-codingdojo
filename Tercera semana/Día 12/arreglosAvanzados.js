let nombres = ['Alex', 'Martha', 'Roger' , 'Julieta'];

/*
for (let i = 0; i<nombres.length; i++){
    console.log(nombres[i]);
}
*/

console.log( "\n--forEach/n:valor/i:indice--" );
//forEach realiza la accion para cada valor del array
nombres.forEach( function( n, i ) {  // siempre el primer valor es el elemento y el segundo el indice 
    console.log( n, i )
});
//nombres.forEach(texto => console.log(texto));   //lo mismo pero con funcion flecha

console.log( "\n--filter--" );

let numeros = [10,20,12,8,24,7,30,15];
let resultado = [];

for (let i = 0; i<numeros.length; i++){
    if (numeros[i] <=15){
        resultado.push(numeros[i]);
    }
}
console.log(resultado);

let resultado2 = numeros.filter(function(n){ //se pueden realizar funciones sin nombre
    if(n<=15){
        return n;
    }
})
console.log(resultado2);


let resultado3 = numeros.filter( n => n <= 15);
console.log(resultado3);

console.log( "\n--generar arreglo de objetos en base a un array--" );

/*
let arregloNombres=[];

for (let i = 0; i<nombres.length; i++){
    let obj ={
        nombre: nombres[i],
        indice: i,
    };
    arregloNombres.push(obj);
};
console.log(arregloNombres);
*/

let arregloNombresMap = nombres.map( (nombre,indice)=>{ //map : ciclar elemento por elemento generando algo nuevo
    return{
        nombre: nombre,
        indice: indice
    }
});
console.log(arregloNombresMap);

let iniciales = nombres.map((nombre)=>{
    let inicial=nombre[0]+nombre[1];
    return inicial;
});

console.log(iniciales);