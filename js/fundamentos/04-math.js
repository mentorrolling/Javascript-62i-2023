//Math

let decimal = 34.4111111111;

//Redondear números
console.log(Math.floor(decimal)); //número más bajo
console.log(Math.ceil(decimal)); //número más alto
console.log(Math.round(decimal)); //redondea el número dependiendo del valor despues de la coma

//número máximo
console.log(Math.max(56.7, 45, -34, 600, 1000, 567));

//Numero mínimo
console.log(Math.min(56.7, 45, -34, 600, 1000, 567));

let numeroString = "67.8765";

//convertir a número entero
let numeroEntero = parseInt(numeroString);

//convertir a número flotante (decimal)
let numeroFlotante = parseFloat(numeroString);

//Números con dos decimales
console.log(Math.round(numeroFlotante * 100) / 100);
let flotante = parseFloat(numeroFlotante.toFixed(2));

//Elevar un número a una potencia
let numeroBase = numeroEntero;
let exponente = 3;
console.log(Math.pow(numeroBase, exponente));

//Raiz cuadrada
console.log(Math.sqrt(flotante));

//Random 1 a 10
console.log(Math.ceil(Math.random() * 10));

//programa que reciba dos números y los multiplique entre si

let num1 = parseFloat(prompt("Ingrese el primer número"));
let num2 = parseFloat(prompt("Ingrese el segundo número"));

let numerosMultiplicados = num1 * num2;

console.log(`${num1} x ${num2} = ${numerosMultiplicados}`);

document.write(`${num1} x ${num2} = ${numerosMultiplicados}`);
