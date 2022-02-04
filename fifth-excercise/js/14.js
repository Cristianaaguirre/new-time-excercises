//Declarada
/*function sumar (numero1 = 0, numero2 = 0) { // numero1 y numero2 son parametos - los = son parametros por default
    console.log(numero1 + numero2);
}

sumar(10, 10);//Argumentos o valores reales
sumar(3, 7);
sumar(2, 10);
sumar(100, 10);

//Expresion

const sumar2 = function (n1, n2) {
    console.log(n1 - n2);
}
sumar2(5, 10);

/* -------------------------------------------------------------------------------------------------------------- */
//return Function

/*function sumar (number1 , number2) {
    return number1 + number2;
}

const resultado = sumar(2 , 3);
console.log(resultado);*/

let total = 0;

function agregarCarrito(precio){
    return total += precio;
}

function calcularImpueto(total) {
    return total * 1.15;
}


total = agregarCarrito(100);
total = agregarCarrito(100);
total = agregarCarrito(100);

console.log(total);

let precioFinal = calcularImpueto(total);

console.log(precioFinal);