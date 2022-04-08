import { checkGoogle } from "../../firebase/firebaseConfig.js";

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
   /* const printPage = document.getElementById('root');
    printPage.innerHTML = loginForm;*/
  
  
    // Evento para ingresar con Google
    
      const btnGgl= containerLogin.querySelector('#btnConfirm')
      btnGgl.addEventListener('click', (logiGoogle) => {
        logiGoogle.preventDefault()
        checkGoogle();
        window.location.hash='#/post';
        //window.location.hash = "#/wall";
      });
  
  
    return containerLogin;


};



