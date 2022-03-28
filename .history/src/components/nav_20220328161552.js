export const nav = () => {
    const createNav = document.createElement('div')
    createNav.classList.add('containeNav')
    createNav.innerHTML = `<nav class="container-nav">
    <div class="nav-post">
        <div class="icon-nav ">
        <i class="fa-solid fa-house"></i>
        </div>
        <div class="icon-nav">
        <i class="fa-solid fa-calendar-days"></i>
        </div>
        <div class="icon-nav">
        <i class="fa-solid fa-bell"></i>
        </div>
    </div>
</nav>`

    return createNav
}