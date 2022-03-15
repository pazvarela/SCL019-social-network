<<<<<<< HEAD
//import { login } from '../lib/views/login.ls';
import { post } from '../lib/views/post.js'
=======
//import { login } from './views/login.js';
import { Post } from '../lib/views/post.js'
>>>>>>> 54e50c95fc4f21c0ebdc81950d2f91577e278dfa
/*import { register } from './views/registerView.js';*/


const templateviews = (hash) => {
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML = ''; // Reiniciando el Div a vacio;
    switch (hash) {
<<<<<<< HEAD
        /*case '#/':
=======
        /*case '#/': 
>>>>>>> 54e50c95fc4f21c0ebdc81950d2f91577e278dfa
            containerRoot.appendChild(login());
        case '#/login':
            containerRoot.appendChild(login());
            break;
        case '#/register':
            containerRoot.appendChild(register());
            break;*/
        case '#/post':
            containerRoot.appendChild(Post());
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
<<<<<<< HEAD
});
//false estado por defecto
=======
});
>>>>>>> 54e50c95fc4f21c0ebdc81950d2f91577e278dfa
