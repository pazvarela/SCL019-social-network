export const nav = () => {
    const viewNav = /* html */ `    
      <ul class = "linklist">
      <li class= "enlace"><a href="#/">Home</a></li>
      <li class= "enlace"><a href="#/">Log In</a></li>
      <li class= "enlace"><a href="#/registrer">Sign On</a></li>
      <li class= "enlace"><a href="#/post">Post</a></li>
      <li class= "enlace"><a href="#/cerrar">Log Out</a></li>
      </ul>
    `;

    const divNav = document.createElement('div');
    divNav.innerHTML = viewNav;

    return viewNav;
};