const menuHamb = document.querySelector('.menu-hamb')
const menuNav = document.querySelector('.nav')

menuHamb.addEventListener('click', () => {
    menuNav.classList.toggle('nav')
    menuNav.classList.toggle('nav-mobile')
})