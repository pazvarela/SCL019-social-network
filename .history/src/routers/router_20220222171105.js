/*import { login } from './views/loginView.js';
import { register } from './views/registerView.js';
import { post } from './views/postView.js';*/

const templateviews = (hash) => {
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML = '';
    switch (hash) {
        case '#/':
            containerRoot.appendChild(log());
            break;
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
            containerRoot.innerHTML = 'ERROR 404';
            break;
    }
};

export const changeRouter = (hash) => {
    if (hash === '#/') {
        return showTemplate(hash);
    }
    if (hash === '#/log') {
        return showTemplate(hash);
    }
    if (hash === '#/register') {
        return showTemplate(hash);
    }
    if (hash === '#/post') {
        return showTemplate(hash);
    }
    return showTemplate(hash);
};

// Cambia página frente a cambio de #

window.addEventListener('hashchange', () => {
    changeRouter(window.location.hash);
}, false);