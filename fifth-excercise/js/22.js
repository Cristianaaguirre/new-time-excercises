// POO

//Object Literal
const producto = {
    nombre : "cristian",
    apellido : "aguirre",
}

console.log(producto);

//Objetc Constructor

function Producto (nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

const producto1 = new Producto('Monitor curvo de 27"', 500);
const producto2 = new Producto('Laptop', 300);

console.log(producto1);
console.log(producto2);

