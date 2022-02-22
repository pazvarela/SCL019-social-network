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