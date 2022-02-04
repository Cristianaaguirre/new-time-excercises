//Promises

const usuarioAutenticado = new Promise ( (resolve, reject) => {
    const autenticado = false;

    if (autenticado) {
        resolve('Usuario Autenticado');
    } else {
        reject('Usuario No Autenticado');
    }
})

usuarioAutenticado
    .then( resultado => console.log(resultado))
    .catch( error => console.log(error));