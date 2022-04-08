//import { checkGoogle } from "../../firebase/firebaseConfig";

export const login = () => {
    window.location.hash = "#/login"
    const containerLogin = document.createElement('div');
    const loginForm = `
    <form id = "formAccess" class = "formularioAcceso">
    <div class="imgBarterBook"> 
    <img class="container-img" src="./img/logo-mobil.png" alt="logo BarterBook con un ícono del libro abierto" />
    </div>
    <h1 class="iniciarsesion" id="iniciarSesion">
    Log in
    </h1>
    
    <div class="btnGoogle">
        <button class="btnconfirm" id="btnConfirm">Sign In</button>   
    </div>

    </form>`;
   
    containerLogin.innerHTML = loginForm

    //------------------BTN PARA INICIO SESION CON GOOGLE-------------------
    /*printPage
    .querySelector('#btnConfirm')
    .addEventListener('click', () => {
      checkGoogle();
      //;
    });*/


  return containerLogin;
};



