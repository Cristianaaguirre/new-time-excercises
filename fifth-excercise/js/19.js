//Foor Loop - todas las condiciones se encuentran dentro del parentesis

/*for ( let i = 1; i <= 2; i++) {
    if ( i % 2 === 0) {
        console.log(`El numero ${i} es par`)
    } else {
        console.log(`El numero ${i} es impar`)
    }
};*/

const carrito = [
    {nombre : "monitor 20 pulgadas", precio : 200},
    {nombre : "tablet", precio : 100},
    {nombre : "auriculares", precio : 50},
    {nombre : "mouse", precio : 50},
    {nombre : "celular", precio : 150},
    {nombre : "Parlantes", precio : 100},
    {nombre : "microfonos", precio : 30},
]

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i]);
};

//While Loop - Mientras que en el for todas las condiciones estan dentro del parentesis, en el while se coloca la variable por fuera, la condicion en el parentesis y el incrementador al final del while.

//El while primero evalua la condicion y luego ejecuta el codigo, sino, no se ejecuta.

/*let i = 1;

while (i <= 10) {
    if (i % 2 === 0) {
        console.log(`El numero ${i} es par`)
    } else {
        console.log(`El numero ${i} es impar`)
    }
    i++
}*/

//Do While Loop --  A diferencia del while ejecuta el codigo al menos una vez y luego evalua

let i = 20;

do {
    console.log(i)
    i++
} while (i <= 10)

