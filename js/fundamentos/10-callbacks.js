//Callbacks
const numeros = [37, 11, 2, 15, 56, 52, 8, 48, 100];

let numerosOrdenados = numeros.sort((a, b) => a - b);

//Filter
//retorna un nuevo arreglo con los elementos que cumplen una conmdición
let pares = numeros.filter((numero) => numero % 2 == 0);
let mayor50 = numeros.filter((numero) => numero > 50);

//find
//devuelve el valor del primer elemento del arreglo que coincida con la condición
let alumnos = ["Jimena", "Romina", "Alfredo", "Gabriela", "Alfredo"];
let resultadoBusqueda = alumnos.find((alumno) => alumno == "Alfredo");

//FindIndex
let indice = alumnos.findIndex((alumno) => alumno == "Gabriela");

//forEach
alumnos.forEach((alumno) => {
  console.log(`Hola, soy ${alumno.toUpperCase()}`);
});

//map
//Crea un nuevo arreglo con los resultados del callback aplicado a cada elemento
let numerosDobles = numeros.map((numero) => numero * 2);

alumnos.map((alumno) => {
  console.log(`Hola, soy ${alumno.toUpperCase()}`);
});

//Tarea 1
//Dado 3 arreglos de números unir todos en uno solo y ordenarlos de mayor a menor
let numeros1 = [13, 456, 786, 23, 45];
let numeros2 = [67, 3, 5];
let numeros3 = [90, 1245, 56000];

const tarea1 = () => {
  let numerosParaOrdenar = numeros3.concat(numeros1, numeros2);
  return numerosParaOrdenar.sort((a, b) => a - b).reverse();
};

/*
Tarea 2
---------
  Filtrar de un arreglo de personas todos los nombres que contengan la letra Ingresada
*/
let personas = [
  "Joaquín",
  "Daniel",
  "Magdalena",
  "Gonzalo",
  "Armando",
  "Samuel",
  "Valentina",
];

const obtenerNombresPorLetra = (letra) => {
  let nombres = personas.filter((persona) => {
    return persona.toLowerCase().includes(letra.toLowerCase());
  });

  return nombres;
};
