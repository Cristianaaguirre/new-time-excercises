// Objetos - crear variables

const producto = {
    nombreProducto : "Monitor 20",
    precio : 200,
    disponible : true,
}

//Primera forma de obtener las propiedades

/*const precioProducto = producto.precio;
const nombreProducto = producto.nombreProduct;
const statusProducto = producto.disponible;*/

/*console.log(precioProducto);
console.log(nombreProducto);
console.log(statusProducto);*/

//Destructuring Objet - la forma mas corta de obtener las propiedades de un objeto y crear una 
//variable a la vez , sin embargo, la variable tomara el nombre de la propiedad dentro del objeto, no puedo modificar el nombre.

const {precio, nombreProducto} = producto;

console.log(precio);
console.log(nombreProducto);
