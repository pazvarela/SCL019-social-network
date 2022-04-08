//import { login } from '../lib/views/login.ls';
import { Post } from '../lib/views/wall.js'
import { login } from '../lib/views/login.js';
//import { register } from './views/registerView.js';/



const templateviews = async (hash) => {
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML = ''; // Reiniciando el Div a vacio;
    switch (hash) {
        case "":
        case '#/':
            containerRoot.appendChild(login());
        case '#/login':
            containerRoot.appendChild(login());
            break;
       /* case '#/register':
            containerRoot.appendChild(register());
            break;*/
        case '#/post':
            containerRoot.appendChild( await Post());
            break;
        default:
            containerRoot.innerHTML = 'ERROR 404';
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
});
//false estado por defecto
