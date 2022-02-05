//Query Selector - retorna 0 a 1 elemento

const heading = document.querySelector('.header__texto h2');
heading.textContent = "Nuevo contenido";
heading.classList.add('nueva-clase');

//QuerySelectorAll

const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces[0]);
enlaces[0].textContent = "nuevo contenido";
enlaces[0].classList.add('nueva-clase');
enlaces[0].classList.remove('nueva-clase');

//GetElementById

