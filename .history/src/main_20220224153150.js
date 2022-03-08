import { myFunction } from './lib/index.js';
// Este es el punto de entrada de tu aplicacion
import { changeRouter } from './routers/router.js';


const init = () => {
    changeRouter(window.location.hash);
};

init();