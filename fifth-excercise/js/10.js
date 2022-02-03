// Arrays

const numeros = [10 ,20, 30, 40, 50];

console.log(numeros);

//console.log(meses);

const arreglos = [200, "Enero", true, [20, 30]];

/*console.log(arreglos);

/*-------------------------------------------------------------------------------------- */

/*
-Acceder a los valores de un arreglo

console.log(arreglos[2]);

-Extension de un arreglo

console.log(arreglos.length);

-ForEach (se vera mas adelante) es un Iterador

numeros.forEach (function(numero) {
})*/

/* ---------------------------------------------------------------------------------------*/

// Method - modificar los arrays

numeros[5] = 60;//metodo muy obsoleto
console.log(numeros);


//Los siguientes metodos ya no se utilizan tanto porque no se recomienda modificar los valores originales dentros de los arrays

numeros.push(60);//suma un dato al final del array
numeros.unshift(5); //suma un dato al  principio del array

/*const meses = ['Enero', 'Febrero', 'Marzo', "Abril"];
meses.pop(); //Elimina el ultimo elemento
meses.shift();//Elimina el primer elemento

meses.splice(2, 1) // (en que lugar quieres posicionarte para elimitar / cuantos quieres eliminar) esta es la sintaxis dentro del parentesis
console.log(meses);*/

/* ------------------------------------------------------------------------------------------ */

// Como no se recomienda cambiar los datos originales, se prefiere crear un array con los nuevos datos 

//Rest Operator o Spread Operator

/*const nuevoArreglo = [...meses, "Mayo"]; // similar al .push
const nuevoArreglo = ["Mayo", ...meses];// similar al .unshift
console.log(nuevoArreglo);*/





