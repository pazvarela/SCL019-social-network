export const home = () => {
    const divHome = document.createElement("div");

    const viewHome = /* html */ ` 
      <div id="mainContainer ">
      <h1>BIENVENIDOS AL MUNDO DE LAS AVENTURAS</h1>
      <button id="btnStart"><a href="/#/login"> DESCUBRE UN MUNDO NUEVO </a></button>
      </div>
      `;
    divHome.innerHTML = viewHome;

    return divHome;
};