// Funciones - para que una funcion se ejecute debemos llamarla
//Declarar
function sumar () {
    console.log(10 + 10);
}

sumar();

//Expresion

const sumar2 = function () {
    console.log(3 + 3);
}
sumar2();

//IIFE - no hay que llamarla - no es recomendalbe utilizar como una funcion reutilizable pero si es muy importante para proteger variables de otros documentos, ya que desde un archivo js se pueden llamar variables que se encuentren en otros archivos. Con IIFE se evita que esas variables sean llamadas y con ello evitar problemas.

(function() {
    console.log("Esto es una funcion");
})();

/* ------------------------------------------------------------------------------------------ */

//Hoisting - Js se ejecuta en dos ocaciones, primero se registran las funciones y luego se registran los llamados

// Si tomamos los ejercicios anteriores, el primer ejemplo se ejecutara de forma correcta y el segundo no. Esto se debe a que en la primera vuelta, JS deteca el primer ejemplo como una funcion pero el segundo es entendido como una constante por lo cual solo se ejecutara el primero. 

