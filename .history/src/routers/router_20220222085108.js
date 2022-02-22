export { router }
const router = (route) => {
    switch (route) {
        case '#/':
            return console.log('home')
        case '#/libros':
            return console.log('post')
        default:
            return console.log('404')
    }
}