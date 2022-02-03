//Apesar de ser un const, si se pueden modificar los valores del objeto

"use strict";// Correr Javascript en modo estricto

const producto = {
    nombreProducto : "Monitor 20",
    precio : 200,
    disponible : true,
}

// Para evitar esto existe un Method que se llama "freeze" - no permite agregar ni eliminar propiedades dentro de un objeto ni modificarlo

/*Object.freeze(producto);

//producto.imagen = "imagen.jpg";*/

// Tambien existe un Method llamado "seal2 - al igual que frezee no puedes agregar ni eliminar pero si puedes modificar las propiedades dentro de un objeto

Object.seal(producto);

producto.nombreProducto = "Monitor 30";

console.log(producto);