let parrafo1 = document.getElementById("parrafo1");
let parrafo2 = document.querySelector("#parrafo2");

parrafo1.innerText =
  "Hola chicos y chicas, es un gusto presentarme...soy un párrafo 😍";

//innerText => p, span, h1, h2
//innerHTML => Escribir código html dentro de un Nodo padre

parrafo1.style.color = "red";

parrafo1.classList = "text-uppercase fw-bold";

//querySelector
document.querySelector(".text-uppercase");
document.querySelector("p");

//quitar contenido
parrafo2.innerText = "";

let padre = document.querySelector("#nodoPadre");
padre.removeChild(parrafo2);

// padre.innerHTML = null;

//Imagen-------------------------------------
let imagen1 = "https://miro.medium.com/v2/0*ZjYSm_q36J4KChdn";
let imagen2 =
  "https://i.kym-cdn.com/photos/images/newsfeed/001/435/941/317.gif";

//crear Elemento
let img = document.createElement("img"); //<img src="https://miro.medium.com/v2/0*ZjYSm_q36J4KChdn" alt="This is Fine">
img.src = imagen1;
img.alt = "This is Fine";

// let hipervinculo = document.createElement("a"); //<img src="" alt="">
// hipervinculo.href = "https://google.com";
// hipervinculo.target = "_blank";

let contenedor = document.querySelector(".box");

contenedor.appendChild(img);

// let imagensFeed=[
//   {imagen:'',descripcion:''}, {imagen:'',descripcion:''}, {imagen:'',descripcion:''}]

//   imagensFeed.forEach((item)=>{
//     let img = document.createElement("img"); //<img src="" alt="">
//     img.src = item.imagen;
//     img.alt = item.descripcion;

//   })

//Botones---------------------------------------
const mostrarAlerta = () => {
  alert("Presionaste botón 1 👍");
};

const cambiarImagen = () => {
  if (img.src == imagen1) {
    img.src = imagen2;
    document.querySelector(".btn-danger").innerText = "Detener animación";
  } else {
    img.src = imagen1;
    document.querySelector(".btn-danger").innerText = "Animar imagen";
  }
};

let btn3 = document.querySelector("#boton3");

const cambiarEstiloBoton = () => {
  if (btn3.classList == "btn btn-warning") {
    btn3.classList = "btn btn-dark";
  } else {
    btn3.classList = "btn btn-warning";
  }
};

//formularios
class Alumno {
  constructor(nombre, correo, comision, mensaje = "") {
    this.nombre = nombre;
    this.correo = correo;
    this.comision = comision;
    this.mensaje = mensaje;
  }
}

const alumnos = [];

let nombre = document.querySelector("#input1");
let correo = document.querySelector("#input2");
let comision = document.querySelector("#input3");
let mensaje = document.querySelector("#input4");

const guardarDatos = (event) => {
  event.preventDefault();

  const alumno = new Alumno(
    nombre.value,
    correo.value,
    comision.value,
    mensaje.value
  );
  alumnos.push(alumno);
  document.querySelector("form").reset();
  nombre.focus();
};
