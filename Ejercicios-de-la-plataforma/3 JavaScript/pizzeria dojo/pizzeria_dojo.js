function pizzaOven(tipoCorteza, tipoSalsa, quesos, toping) {
    var pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = tipoSalsa;
    pizza.quesos = quesos;
    pizza.toping = toping;
    return pizza;
}

var p1 = pizzaOven ("estilo Chicago", "tradicional", ["mozzarella"] , ["pepperoni", "salchicha"]);
var p2 = pizzaOven ("lanzada a mano" , "marinara" , ["mozzarella", "feta"] , ["champiñones", "aceitunas", "cebollas"])
console.log(p1);
console.log(p2);

var pizza = {
    tipoCorteza: ["estilo Chicago","lanzada a mano"],
    tipoSalsa: ["tradicional","marinara"],
    quesos: ["mozzarella","feta"],
    toping: ["pepperoni", "salchicha", "champiñones", "aceitunas", "cebollas"]
};

function pickIng(num,restrict){ //selecciona el indice del ingrediente y verifica que no se repita con la restricción
    let ing=99;
    while(ing>num-1){
        let temp=Math.round(Math.random()*10);
        if(temp!=restrict){
            ing=temp;
        }
    }
    return ing;
}

function randomPizzaOven(ingCatalog) {
    var pizza = {};
    let corteza=pickIng(ingCatalog.tipoCorteza.length,-1);
    console.log(corteza);
    pizza.tipoCorteza = ingCatalog.tipoCorteza[corteza];
    pizza.tipoSalsa = ingCatalog.tipoSalsa[pickIng(ingCatalog.tipoCorteza.length,-1)];
    pizza.quesos = ingCatalog.quesos[pickIng(ingCatalog.tipoCorteza.length,-1)];
    let firstIng=[pickIng(ingCatalog.tipoCorteza.length,-1)];
    pizza.toping = [ingCatalog.toping[firstIng],ingCatalog.toping[pickIng(ingCatalog.tipoCorteza.length,firstIng)]];
    return pizza;
}

var p3=randomPizzaOven(pizza);
console.log(p3);
var p4=randomPizzaOven(pizza);
console.log(p4);