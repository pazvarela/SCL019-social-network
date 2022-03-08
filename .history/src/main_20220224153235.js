import { myFunction } from './lib/index.js';
// Este es el punto de entrada de tu aplicacion
import { changeRouter } from './routers/router.js';

// Con esta función le agregamos la nueva url: '#/' al comenzar la página.
const init = () => {
    changeRouter(window.location.hash);
};

init();