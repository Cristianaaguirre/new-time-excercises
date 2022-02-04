//Arrow Function

const sumar2 = function (n1 , n2) {
    console.log(n1 + n2);
}

//Cuando el arrow function tiene solo 1 linea de codigo las llaves son opcionales

const sumar3 = (n1 , n2) => console.log(n1 + n2) 

sumar3(5, 5);

sumar2(5 , 10);

/* --------------------------- */

//Cuando solo hay un parametro, pueden quitarse los parentesis

const aprendiendo = teconologia => console.log(`Aprendiendo: ${teconologia}`);

aprendiendo("Javascript");

/* Arrow Function con array methods*/


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

meses.forEach( mes => {
    if (mes == "Marzo") {
        console.log(mes)
    }
})
/* -------------------------------------------------------------------------- */
// Convertir en un arrow function

let resultado;

// Some - lo mejor para arrays de objetos

resultado = carrito.some(producto => producto.nombre === "celular")


//Reduce 

resultado = carrito.reduce((total, producto) => total + producto.precio, 0)


//Filter

resultado = carrito.filter(producto => producto.precio >= 100);


resultado = carrito.filter( producto => producto.nombre !== "celular");

console.log(resultado);


