//import { myFunction } from './lib/index.js';
// Este es el punto de entrada de tu aplicacion
import { changeRouter } from './routers/router.js';
<<<<<<< HEAD
//import { login } from './lib/views/login.js';
=======
//import { login } from './views/login.js';
>>>>>>> 54e50c95fc4f21c0ebdc81950d2f91577e278dfa

// Con esta función le agregamos la nueva url: '#/' al comenzar la página.
const init = () => {
    changeRouter(window.location.hash);
};
// Al terminar de cargar la página(Event Load) se ejecuta la función INIT.
window.addEventListener('load', init);
<<<<<<< HEAD
//init(); se elimina init para evitar la redundancia
=======
>>>>>>> 54e50c95fc4f21c0ebdc81950d2f91577e278dfa
