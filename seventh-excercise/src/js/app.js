const openMenu = document.querySelector('.menu');
const menuBars = document.querySelector('.header__nav');
const closeMenu = document.querySelectorAll('a.nav__option');

openMenu.addEventListener('click', () => {
    menuBars.classList.toggle('header__nav--modifier');
})

for (let i = 0; i < closeMenu.length; i++) {
    closeMenu[i].addEventListener('click', () => {
        menuBars.classList.remove('header__nav--modifier')
    })
}

document.addEventListener('DOMContentLoaded', function () {
    createGallery();
})

function createGallery () {
    const galeria = document.querySelector('.crear-galeria');

    for (let i = 1; i <= 12; i++) {
        const imagen = document.createElement('IMG');
        imagen.src = `/src/img/thumb/${i}.jpg`;
        imagen.dataset.imagenId = i;

        //mostrar imagen

        imagen.onclick = mostrarImagen;

        const list = document.createElement('LI');
        list.appendChild(imagen);
        galeria.appendChild(list);
    }
}

function mostrarImagen (e) {
    const id= parseInt(e.target.dataset.imagenId)

    const imagen = document.createElement('IMG')
    imagen.src = `/src/img/grande/${id}.jpg`;

    //Agregando un overlay

    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    const body = document.querySelector('body');
    body.appendChild(overlay)
    body.classList.add('fijar-imagen'); //fijar imagen en la pantalla

    // cerrar imagen
    
    overlay.onclick = function () {
        body.classList.remove('fijar-imagen')
        overlay.remove();
    } 
}




document.addEventListener('DOMContentLoaded', function () {
    navegacionFija();

})

function navegacionFija () {

    const barra = document.querySelector('.header')

    const observer = new IntersectionObserver( function(entries) {
        if (entries[0].isIntersecting) {
            barra.classList.remove('fijo')
            console.log('lo veo')
        } else {
            barra.classList.add('fijo')
            console.log("no lo veo")
        }
    })

    observer.observe(document.querySelector('.video'))
}
