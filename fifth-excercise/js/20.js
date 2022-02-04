const carrito = [
    {nombre : "monitor 20 pulgadas", precio : 200},
    {nombre : "tablet", precio : 100},
    {nombre : "auriculares", precio : 50},
    {nombre : "mouse", precio : 60},
    {nombre : "celular", precio : 150},
    {nombre : "Parlantes", precio : 100},
    {nombre : "microfonos", precio : 30},
]

//forEach - solo en Arrays - se ejectara tantas veces como objetos haya dentro del array.

//Usaremos forEach cuando se quiera iterar sobre un listado y mandarlo a la consola o mostrarlo en pantalla

carrito.forEach( lista => console.log(lista.precio));
carrito.forEach( lista => console.log(lista.nombre));

//map - tiene la misma sintaxis de forEach y realiza la misma acción

//Usaremos map cuando se quiera iterar sobre un listado y crear un nuevo arreglo.

carrito.forEach( lista => console.log(lista.precio));

const arreglo2 = carrito.map( lista => `Nombre del producto: ${lista.nombre}`);


console.log(arreglo2);
