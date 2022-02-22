export const register = () => {
    const divRegister = document.createElement('div');

    const viewRegister = /* html */ `
    <img class="portada" src="images/portada.png" />
      <div id="contenedorRegistro" class="contenedorRegistro">
      <div class="textoRegistro">¿No te has registrado aún?</div>
  
      <div class="textoRegistro">Llena el formulario y registra tu usuario</div>
  
         <form class="formularioRegistro" id="formularioRegistro">
      <input class=inputReg type="text" placeholder="Usuario" id="user">
      <input class=inputReg type="email" placeholder="Correo Electronico" id="emailReg" name ="email">
      <input class=inputReg type="password" placeholder="Contraseña" id="passReg" name ="password">
      <button type="submit" id="btnRegistro">CONFIRMAR</button> 
      <a href="/#/login"><button type="button" id="btnCancelar">CANCELAR</button></a>
          </form>
      </div>
      `;

    divRegister.innerHTML = viewRegister;

    return divRegister;
};