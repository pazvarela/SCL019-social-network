// Este es el punto de entrada de tu aplicacion
import { changeRouter } from './routers/router.js';
import { db } from './firebase/firebaseConfig.js'

const init = () => {
    changeRouter(window.location.hash);
};

init();