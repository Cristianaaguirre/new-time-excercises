
function descargarClientes () {
    return new Promise ( resolve => {
        console.log('Descargando clientes ... espere');

        setTimeout ( () => {
            resolve('La lista de clientes fueron descargados');
        }, 5000);
    });
};

function descargarPedidos () {
    return new Promise ( resolve => {
        console.log('Descargando pedidos ... espere');

        setTimeout ( () => {
            resolve('La lista de pedidos fueron descargados');
        }, 3000);
    });
};

async function app () {
    try {
        /*const cliente = await descargarClientes();
        const pedidos = await descargarPedidos();
        console.log(cliente);
        console.log(pedidos);*/
        const resultado = await Promise.all([descargarClientes(), descargarPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    }
    catch (error) {
        console.log(error);   
    }
}

app();

console.log("Este codigo no se bloquea")