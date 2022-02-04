//Class

class Clientes {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    formatearClientes() {
        return `El Cliente ${this.nombre} ${this.apellido}`;
    }
};


const cliente = new Clientes("Cristian", "Aguirre");
console.log(Clientes);
console.log(cliente);
console.log(cliente.formatearClientes());


class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El producto ${this.nombre} tiene un valor de ${this.precio}`
    }

    obtenerPrecio () {
        console.log(this.precio)
    }
};

const producto2 = new Producto("Juan",500);
const producto = new Producto('Monitor de 27"', 500);

console.log(Producto);
console.log(producto);
console.log(producto.formatearProducto());
console.log(producto2.obtenerPrecio());

//Herencia 

class Libro extends Producto {
    constructor (nombre, precio, isbn) {
        super(nombre, precio)
        this.isbn = isbn;
    }

    formatearProducto() {
        return `${super.formatearProducto()} y su isbn es ${this.isbn}`
    }
}

const libro = new Libro('Harry Potter', 200, 23144123);

console.log(Libro);
console.log(libro.formatearProducto());