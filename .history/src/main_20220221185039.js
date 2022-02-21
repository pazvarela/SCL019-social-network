// Este es el punto de entrada de tu aplicacion
import './style.css'
import { myFunction } from './lib/index.js';
import { router } from './routers/router';

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

})