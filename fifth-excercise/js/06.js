// Objetos

//Sintaxis con variables

/*const   nombreProduct = 'Monitor 20"',
        precio = 200,
        disponible = true;*/

//Sintaxis de los objetos - contiene mas informacion que una sola variable

const producto = {
    nombreProduct : "Monitor 20",
    precio : 200,
    disponible : true,
}


//Sintaxis de puntos 

/*console.log(producto.nombreProduct);
console.log(producto.precio);
console.log(producto.disponible);

//Sintaxis de corchetes-------------------

console.log(producto["nombreProduct"]);*/

/* ----------------------------------------------------------------------------- */

//Modificar los objetos - puede agregarse y quitarse propiedades de ellos

producto.imagen =  "nuevo objeto";
delete producto.precio

console.log(producto);
