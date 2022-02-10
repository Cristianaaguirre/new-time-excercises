const openMenu = document.querySelector('.menu');
const menuBars = document.querySelector('.header__nav');
const closeMenu = document.querySelectorAll('a.nav__option');

openMenu.addEventListener('click', () => {
    menuBars.classList.toggle('open-menu');
})

for (let i = 0; i < closeMenu.length; i++) {
    closeMenu[i].addEventListener('click', () => {
        menuBars.classList.remove('')
    })
}