export const home = () => {
    const divHome = document.createElement("div");

    const viewHome = /* html */ ` 
      <div id="mainContainer ">
      <h1>BIENVENIDOS AL MUNDO DE LAS AVENTURAS</h1>
      <button id="btnInicio"><a href="/#/login"> ENCONTRAR JUGADORES AQUI </a></button>
      </div>
      `;
    divHome.innerHTML = viewHome;

    return divHome;
};