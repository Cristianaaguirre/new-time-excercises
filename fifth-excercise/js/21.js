// This - aqui no se puede usar el arrow function

const reservacion = {
    nombre : "Cristian",
    apellido : "Aguirre",
    total : 200,
    pagado : false,
    informacion : function () {
        console.log(`El cliente ${reservacion.nombre} reservó y su cantidad a pagar es de ${reservacion.total}`)
    }
}

//El this toma el valor dentro del objeto en el cual se encuentra

const reservacion2 = {
    nombre : "Milena",
    apellido : "Venier",
    total : 200,
    pagado : false,
    informacion : function () {
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`)
    }
}

reservacion.informacion();
reservacion2.informacion();