import { login } from './views/loginView.js'
import { register } from './views/registerView.js'


export { router }
const router = (route) => {
    switch (route) {
        case '#/':
            return console.log('home')
        case '#/libros':
            return console.log('libros')
        case '#/post':
            return console.log('post')
        default:
            return console.log('404')
    }
}