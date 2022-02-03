const producto = {
    nombreProducto : "Monitor 20",
    precio : 200,
    disponible : true,
}

const medidas = {
    peso : "20 kg",
    tamaño : 300,
}

const nuevoProducto = { ...producto, ...medidas };

console.log(producto);
console.log(nuevoProducto);