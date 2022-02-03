// Tipos de datos

//String

const product = 'Prueba';
console.log(product);

/*  Otra forma de constuir un string pero no se usa comunmente
const product2 = String('Otra forma de nombrar un string');
console.log(product2);

/*  Otra forma de constuir un string pero no se usa comunmente
const product3 = new String('Otra forma de nombrar un string');
console.log(product3);*/

/*------------------------------------------------------------------------------- */

//Numbers

const number1 = 100;
const number2 = 200;
const number3 = 20.20;
const number4 = .10;
const number5 = -5;

/*Con js, no es necesario declarar que tipo de numero estamos usando, ya se positivo, negativo,
decimal, etc. Pues Js intepreta a todos los datos de tipo number como numeros.

Al ser numeros, solo podemos utilizarlos de forma común,
es decir a traves de operadores: sumas, restas, multiplicaciones y divisiones

Un operador a tener en cuenta es %, este operador te devuelve el resto de una división
entre dos numero

Si divido 7 entre 6 me queda como resto 1, el operador % me dara como resultado 1 pues es el resto
de tal division

*/

console.log(number1)
console.log(number2)
console.log(number3)
console.log(number4)
console.log(number5)
console.log(number1 + number2 - number3 * number4 / number5)
console.log(number2 % number1)


/* El Math, en Js existe la ventana global donde podras ver todo lo que tienes disponible */

let resultado

resultado = Math.PI;
resultado = Math.round(3.6); //round redondea un numero hacia arriba, a partir del .5
resultado = Math.ceil(3.2); // ceil redondea siempre hacia arriba, no importa si es un .2
resultado = Math.floor(3.6); // floor redondea siempre hacia abajo, no importa si es un .9
resultado = Math.sqrt(144); // Muestra la raiz cuadrada de un numero
resultado = Math.abs(-200); // Convierte numeros negativos en positivos
resultado = Math.min(10, 4, 3, 12); // Nos muestra el numero mas bajo de un listado
resultado = Math.max(10, 4, 3, 12); // Nos muestra el numero mas alto de un listado
resultado = Math.random; // Nos devuelve un numero random
resultado = Math.floor(Math.random() * 10)

/*Un ejemplo para utilizar este tipo de funciones es la siguiente:
Si tuvieramos una pagina donde se colocan productos y tuviesemos 77 productos y cada pagina
pudiera mostrar 20 productos, en total tendriamos 3.85 paginas. No podemos mostrar 3.85p
para eso podriamos utilizar .ciel y crear 4 paginas para mostrar todos los productos
*/
console.log(resultado);


/*---------------------------------------------------------------------------------------------*/
