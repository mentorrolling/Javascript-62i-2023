//bucles o ciclos

//while
//mientras se cumpla la condición hacer algo varias veces

// while (condition) {
//   //acciones
//   //controlar el bucle
// }

// let vecesASumar = 10; //iterador
// let totalSuma = 0;

// while (vecesASumar > 0) {
//   //acciones
//   totalSuma += 10; //totalSuma = totalSuma + 10
//   vecesASumar--; //vecesASumar = vecesASumar -1
//   console.log(
//     `Total de la suma: ${totalSuma} | veces que quedan por sumar: ${vecesASumar}`
//   );
// }

//calcule la tabla del 2
let tabla = parseInt(prompt("Ingrese la tabla a calcular"));
let valor = 1; //iteradora

if (!isNaN(tabla)) {
  while (valor <= 10) {
    console.log(`${tabla} x ${valor} = ${tabla * valor}`);
    document.write(`${tabla} x ${valor} = ${tabla * valor}<br>`);

    valor++;
  }
}

//-----------------------
//pokedex
let pokemon = prompt("Ingresa el nombre del Pokemon capturado");
let pokedex = "";

while (pokemon) {
  //acciones

  pokedex = pokedex + " | " + pokemon;

  pokemon = prompt("Ingresa el nombre del Pokemon capturado");
}
// console.log(pokemon);
console.log(pokedex);

//do while
// do {
//     //acciones

// } while (condition);

let vueltas = 0; //iterador
let respuesta = "";

do {
  respuesta = prompt("Ingrese un nombre");
  console.log(`Hola ${respuesta}! Bienvenid@ 😉`);
  vueltas--;
} while (vueltas > 0);

//for
// for (let i = 0; i < 10; i++) {

//     //acciones
// }

let cantidad = 2;
let nombre = "";

for (let i = 0; i < cantidad; i++) {
  //scope de variables
  nombre = prompt("Ingrese su alias de superhéroe"); //en el for
  console.log(`Bienvenido ${nombre} al equipo!!`);
}

console.log(nombre);

let tablita = parseInt(prompt("Ingrese la tabla a calcular"));

while (tablita) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${tablita} x ${i} = ${tablita * i}`);
  }
  console.log("---------------------------");
  tablita = parseInt(prompt("Ingrese la tabla a calcular"));
}
