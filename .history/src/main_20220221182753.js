// Este es el punto de entrada de tu aplicacion
import './style.css'
import { myFunction } from './lib/index.js';

myFunction();

// selector
let menu = document.querySelector('.hamburger');

// method
function toggleMenu(event) {
    this.classList.toggle('is-active');
    document.querySelector(".menuppal").classList.toggle("is_active");
    event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);