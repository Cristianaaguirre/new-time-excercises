//Array Methods

const meses = ['Enero', 'Febrero', 'Marzo', "Abril", "Junio"];

console.log(meses);

// No existen los arreglos asosiativos en js pero si un arreglo de objetos

const carrito = [
    {nombre : "monitor 20 pulgadas", precio : 200},
    {nombre : "tablet", precio : 100},
    {nombre : "auriculares", precio : 50},
    {nombre : "mouse", precio : 50},
    {nombre : "celular", precio : 150},
    {nombre : "Parlantes", precio : 100},
    {nombre : "microfonos", precio : 30},
]
console.log(carrito);

//For Each - recorre el array

meses.forEach(function(mes){
    if (mes == "Marzo") {
        console.log(mes)
    }
})


// Includes - recorre el array y devuelve un boleano

/*const resultado = meses.includes("Marzo"); // Funciona bien en arrays planos

// Some - lo mejor para arrays de objetos

resultado = carrito.some(function(producto) {
    return producto.nombre === "celular"
})

//Reduce 

resultado = carrito.reduce(function(total, producto) {
    return total + producto.precio
}, 0)*/


//Filter

resultado = carrito.filter(function(producto){
    return producto.nombre !== "celular"
});

console.log(resultado);


