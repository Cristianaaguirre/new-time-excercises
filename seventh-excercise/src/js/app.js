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
        const img = document.createElement('IMG');
        img.src = `/src/img/thumb/${i}.jpg`;
        
        const list = document.createElement('LI');
        list.appendChild(img)
        
        galeria.appendChild(list);
    }
}