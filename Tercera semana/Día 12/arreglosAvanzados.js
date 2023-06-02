let nombres = ['Alex', 'Martha', 'Roger' , 'Julieta'];

for (let i = 0; i<nombres.length; i++){
    console.log(nombres[i]);
}

console.log( "---------" );

nombres.forEach( function( n, i ) {  //n es el valor, i es su indice ( siempre el primer valor es el elemento y el segundo el indice )
    console.log( n, i )
});

nombres.forEach(texto => console.log(texto));   //lo mismo pero con funcion flecha

console.log( "---------" );

let numeros = [10,20,12,8,24,7,30];
let resultado = [];

for (let i = 0; i<numeros.length; i++){
    if (numeros[i] <=15){
        resultado.push(numeros[i]);
    }
}
let resultado2 = numeros.filter(function(n){
    if(n<=15){
        return n;
    }
})

let resultado3 = numeros.filter( n => n <= 15);

let arregloNombres=[];

for (let i = 0; i<nombres.length; i++){
    let obj ={
        nombre: nombres[i],
        indice: i,
    };
    arregloNombres.push(obj);
};
console.log(arregloNombres);

let arregloNombresMap = nombres.map( (nombre,indice)=>{
    return{
        nombre:nombre,
        indice:indice
    }
});
