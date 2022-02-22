export const register = () => {
    const divRegister = document.createElement('div');

    const viewRegister = /* html */ `
    <img class="cover" src="img/bookcover1.png" />
      <div id="containerRegister" class="container-register">
      <div class="text-register">¿No te has registrado aún?</div>
  
      <div class="text-register">Llena el formulario y registrate</div>
  
         <form class="form-register" id="formRegister">
      <input class=inputReg type="text" placeholder="Usuario" id="user">
      <input class=inputReg type="email" placeholder="Correo Electronico" id="emailReg" name ="email">
      <input class=inputReg type="password" placeholder="Contraseña" id="passReg" name ="password">
      <button type="submit" id="btnRegistrer">CONFIRMAR</button> 
      <a href="/#/login"><button type="button" id="btnCancelar">CANCELAR</button></a>
          </form>
      </div>
      `;

    divRegister.innerHTML = viewRegister;

    return divRegister;
};