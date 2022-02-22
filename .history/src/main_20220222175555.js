// Este es el punto de entrada de tu aplicacion
import './style.css'
import { router } from './routers/router';
import { changeRouter } from './routers/router.js';

const init = () => {
    changeRouter(window.location.hash);
};

init();