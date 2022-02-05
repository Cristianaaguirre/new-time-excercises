//Query Selector - retorna 0 a 1 elemento

/*const heading = document.querySelector('.header__texto h2');
heading.textContent = "Nuevo contenido";
heading.classList.add('nueva-clase');

//QuerySelectorAll

const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces);
enlaces[0].textContent = "nuevo contenido";
enlaces[0].classList.add('nueva-clase');
enlaces[0].classList.remove('nueva-clase');*/

//GetElementById -- Es la misma sintaxis pero de a poco querySelector y querySelectorAll se usan más

/* ----------------------------------------------------------------------------------------- */
//creatElement

/*const nuevoEnlace = document.createElement('A');

<a href="" class="" id="">Content</a> - estructura general de un enlace

//Agregar un href

nuevoEnlace.href = 'cursos.html';

//Agregar clase

nuevoEnlace.classList.add('navegacion__enlace');

//Agregar contenido

nuevoEnlace.textContent = "nuevo enlace";

//Posicionar el elemento

const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

/* ------------------------------------------------------------------------------------------ */

//Eventos 

/*console.log(1);

window.addEventListener('load', function() { 
    console.log(2);
}) // load espera que el HTML , y al resto de archivos que depende de él, esten listo

window.onload = function () {
    console.log(3);
}

document.addEventListener('DOMContentLoeaded', function () {
    console.log(4);
});

console.log(5);

/* ------------------------------------------------------------------------------------------ */

//Click evento - eventos sobre objetos creados por nosotros

/*const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function (evento) {
    console.log(evento);
    evento.preventDefault();
    console.log('Validando formulario')
})*/
