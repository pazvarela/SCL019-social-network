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
    }
}