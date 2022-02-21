// Este es el punto de entrada de tu aplicacion
import './style.css'
import { myFunction } from './lib/index.js';

myFunction();

//menu hamburguesa
// selector
let menu = document.querySelector('.hamburger');

// method
function toggleMenu(event) {
    this.classList.toggle('is-active');
    document.querySelector(".menu-toggle").classList.toggle("is_active");
    event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);

window.addEventListener('hashchange', () => {
    console.log(window.location.hash)
})