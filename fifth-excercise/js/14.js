//Declarada
function sumar (numero1 = 0, numero2 = 0) { // numero1 y numero2 son parametos - los = son parametros por default
    console.log(numero1 + numero2);
}

sumar(10, 10);//Argumentos o valores reales
sumar(3, 7);
sumar(2, 10);
sumar(100, 10);

//Expresion

const sumar2 = function (n1, n2) {
    console.log(n1 + n2);
}
sumar2(5, 10);