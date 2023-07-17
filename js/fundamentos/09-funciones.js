//Funciones o métodos

// alert("Hola mundo");

//Funciones declarativas
function saludar() {
  //acciones
  alert("Hola!!");
}

//Funciones anónimas o de expresión
const saludarAlumnos = function () {
  alert("Hola alumnos/as");
};

//parámetros son datos que recibe una función dentro de los paréntesis y que se usan en la misma para obtener resultados.
const calcularAreaCuadrado = function (lado) {
  //área del cuadrado = lado x lado
  console.log(`El área del cuadrado es ${lado * lado}cm²`); // alt+253
};

//parámetros por defecto
function saludarUsuario(usuario = "Invitado") {
  console.log(`Hola ${usuario} bienvenid@!!🧋`);
}

//Diferencia entre funciones anónimas y declarativas
//Primera diferencia: las funciones anónimas deben declararse antes de ejecutarse, las declarativas podemos llamarlas en cualquier momento.
//Segunda: las funciones declarativas pueden ser reasignadas con un nuevo valor, las anónimas no porque son constantes

calcularDescuento(2000);

function calcularDescuento(precio, descuento = 15) {
  let descuentoCalculado = 100 - descuento; //100 - 15 = 85
  let montoConDescuento = (precio * descuentoCalculado) / 100;
  console.log(`El importe a abonar es de $${montoConDescuento}`);
}

const cotizacionDolarHoy = function (importe = 1, dolar = 262) {
  let calcular = importe * dolar;
  console.log(`Dolar: $${importe} | Pesos argentinos: $${calcular}`);
};

cotizacionDolarHoy(100);

//return
//Detiene la ejecución
//Devuelve un resultado o un valor

function calcularDescuentoReturn(precio, descuento = 15) {
  let descuentoCalculado = 100 - descuento; //100 - 15 = 85
  let montoConDescuento = (precio * descuentoCalculado) / 100;
  return montoConDescuento; //lo que devuelve la función
}

console.log(`El importe a abonar es de $${calcularDescuentoReturn(4500)}`);

const cubo = function (num) {
  return Math.pow(num, 3);
};

//Función dentro de otra
function calculadoraBasica(num1, num2, action) {
  switch (action) {
    case "suma":
      return `${num1} + ${num2} = ${num1 + num2}`;
    case "resta":
      return `${num1} - ${num2} = ${num1 - num2}`;
    case "multiplicar":
      return `${num1} x ${num2} = ${num1 * num2}`;
    case "division":
      return `${num1} / ${num2} = ${num1 / num2}`;
    case "cubo":
      return `Cubo de num1 = ${cubo(num1)} | Cubo de num2 = ${cubo(num2)}`;
    default:
      return "La acción no es válida";
  }
}

//Scope: Ámbito de una variable dentro de una función

//Global
let productos = ["Ipad Pro", "Iphone 13", "MacBook Air"];

const getProducto = function (indice = 0) {
  console.log(`Producto seleccionado: ${productos[indice]}`);
};

const getProductos = function () {
  document.write("<h3>Listado de productos</h3>");
  document.write("<ul>");
  for (let i = 0; i < productos.length; i++) {
    //lista de productos <li></li>
    document.write(`<li>${productos[i]}</li>`);
  }
  document.write("</ul>");
};

//Local

let usuarios = ["Pablo", "Josefina", "Anastasia"];

const getUsuarios = function () {
  let usuarios = ["Bill Gates", "Steve Jobs", "Elon Musk"];
  console.log("Usuarios tecnológicos");
  console.log("---------------------");
  for (let i = 0; i < usuarios.length; i++) {
    console.log(i + 1 + "-" + usuarios[i]);
  }
};

//Funciones de flecha | Arrow Function

const calcularDescuentoArrow = (precio, descuento = 15) => {
  let descuentoCalculado = 100 - descuento; //100 - 15 = 85
  let montoConDescuento = (precio * descuentoCalculado) / 100;
  return montoConDescuento;
};

const getProductoArrow = (indice = 0) =>
  `Producto seleccionado: ${productos[indice]}`;
