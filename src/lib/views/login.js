//import { checkGoogle } from "../../firebase/firebaseConfig";

export const login = () => {
    window.location.hash = "#/login"
    const containerLogin = document.createElement('div');
    const loginForm = `
    <form id = "formAccess" class = "formularioAcceso">
    <div class="imgBarterBook"> 
    <img class="container-img" src="./img/logo-mobil.png" alt="logo BarterBook con un ícono del libro abierto" />
    </div>
    <div class="btnGoogle">
        <button class="btnconfirm" id="btnConfirm">
        <img class="googleicon" id="iconGoogle" src="./img/google-icon.png" alt="logo google"/> 
        <p> Log in with Google </p>
        </button>   
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



