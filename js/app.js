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
