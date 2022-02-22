// Este es el punto de entrada de tu aplicacion
import './style.css'
import { myFunction } from './lib/index.js';
import { router } from './routers/router';

myFunction();



window.addEventListener('hashchange', () => {
    router(window.location.hash)
})