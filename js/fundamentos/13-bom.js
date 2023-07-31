// BOM
// location
location.assign("https://rollingcodeschool.com");

location.replace("https://rollingcodeschool.com");

location.reload(); //recarga la página

location.href = "https://google.com";

//Navigator
if (navigator.online) {
  console.log("estas conectado");
} else {
  console.log("No tenés internet 😭");
}

if (navigator.deviceMemory < 4) {
  console.warn("Memoria insuficiente");
}

//history
let cantidadPaginas = 0;
if (cantidadPaginas < history.length) {
  history.go(1);
  cantidadPaginas++;
}

//time

//setInterval milisegundos 1000 => 1 segundo
//ejecuta la accion cada cierto tiempo

//setTimeout milisegundos 1000 => 1 segundo
//Ejecutar por única vez la acción después de cierto tiempo

let intervalo = null;

const fechaActual = () => {
  let fecha = "";
  intervalo = setInterval(() => {
    fecha = new Date();
    document.body.innerText = "";
    document.write(`<h3>${fecha}</h3>`);
  }, 1000);
};

const detener = () => clearInterval(intervalo);

const redirigir = () => {
  document.write("<h3>Redireccionando a la página principal...</h3>");
  setTimeout(() => {
    location.replace("https://google.com");
  }, 3000);
};
