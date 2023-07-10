//Array (Arreglos)
let alumnos = ["Jimena", "Alberto", "Nicolás", "Paula", "Alejandra", "Pablo"];

// Mostrar un elemento del arreglo
console.log(alumnos[2]);

//Obtener la cantidad de elementos de un arreglo
console.log(alumnos.length);

//mostrar el último elemento
console.log(alumnos.at(-1));
console.log(alumnos[alumnos.length - 1]);

//concatenar
let alumnosDestacados = ["Florinda", "Pedro", "Nacho", "Beatriz"];
let alumnosEnFalta = ["Josefina", "Diotrefes"];

let comision = alumnos.concat(alumnosDestacados, alumnosEnFalta);

//Iterar un arreglo
for (let index = 0; index < comision.length; index++) {
  console.log(`Hola ${comision[index].toUpperCase()}, cómo estás? 🤔`);
  //accion
}

//Agregar un elemento arreglo
comision.push("Roxana", "Roberto", "Fabrizio");
comision.unshift("Luciano");

//Eliminar los elementos
comision.pop(); //el último
comision.shift(); //el primero

//Obtener la posición de un elemento en el arreglo
console.log(comision.indexOf("roberto"));

//Saber si un elemento existe
console.log(comision.includes("Abigail"));

//Eliminar un elemento según la posición
comision.splice(6, 1);

//Agregar elemento desde una posición
comision.splice(5, 0, "Laura", "Magali");

//Reemplazar un elemento por su posición
comision.splice(7, 1, "Daniel", "Alfredo", "Chapulin");

//Concatenar un arreglo con un string
console.log(`Los alumnos destacados son: ${alumnosDestacados}`);

//Ordenar alfabéticamente
comision.sort();

//ordenar al revés
comision.reverse();

//Extraer un nuevo arreglo de otro existente
let ausentes = comision.slice(9, 13);

//ENIGMA UNIVERSAL
console.log(["🥚", "🐔"].sort());

/*
Dado un array de números crear un programa que pida al usuario ingresar un número y verificar si existe en el arreglo. Si es así dar un mensaje como el siguiente "Adivinaste el número"
*/

let lista = [23, 56, 78, 120, 45, 1234];

let numero = Number(prompt("Ingrese un número"));

if (!isNaN(numero)) {
  if (lista.includes(numero)) {
    console.log("Adivinaste el número✨ ");
  } else {
    console.error("No adivinaste el número LOSER 🙄");
  }
} else {
  console.warn("Debes ingresar un número");
}
