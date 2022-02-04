// POO

//Object Literal
/*const producto = {
    nombre : "cristian",
    apellido : "aguirre",
}

console.log(producto);*/

//Objetc Constructor

/*function Producto (nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

const producto1 = new Producto('Monitor curvo de 27"', 500);
const producto2 = new Producto('Laptop', 300);

console.log(producto1);
console.log(producto2);*/

// Prototypes

function Clientes (nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

Clientes.prototype.formatearClientes = function() {
    return `El cliente ${this.nombre} ${this.apellido}`
}


const cliente = new Clientes("Cristian", "Aguirre");
console.log(Clientes);
console.log(cliente);
console.log(cliente.formatearClientes());


function Producto (nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

Producto.prototype.formatearProducto = function () {
    return `El producto ${this.nombre} tiene un precio de: $${this.precio}`
}

const producto = new Producto('Monitor de 27"', 500);
console.log(Producto);
console.log(producto);
console.log(producto.formatearProducto());

