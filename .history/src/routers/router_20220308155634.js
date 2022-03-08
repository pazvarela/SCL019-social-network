/*import { login } from './views/loginView.js';
import { register } from './views/registerView.js';
import { post } from './views/postView.js';*/
import { error404 } from "../lib/views/error404";

const templateviews = (hash) => {
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML = ''; // Reiniciando el Div a vacio;
    switch (hash) {
        case '#/':
        case '#/login':
            containerRoot.appendChild(login());
            break;
        case '#/register':
            containerRoot.appendChild(register());
            break;
        case '#/post':
            containerRoot.appendChild(post());
            break;
        default:
            containerRoot.innerHTML = '';
            break;
    }
};

export const changeRouter = (hash) => {
    if (hash === '#/') {
        return templateviews(hash);
    }
    if (hash === '#/login') {
        return templateviews(hash);
    }
    if (hash === '#/register') {
        return templateviews(hash);
    }
    if (hash === '#/post') {
        return templateviews(hash);
    }
    return templateviews(hash);
};

// Cambia página frente a cambio de #

window.addEventListener('hashchange', () => {
    changeRouter(window.location.hash);
}, false);