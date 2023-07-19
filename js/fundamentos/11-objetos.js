//Objetos
const vocales = []; //array
let persona = {
  nombre: "Martín Riquelme",
  edad: 29,
  genero: "Masculino",
  curso: "Fullstack",
  saludar: function () {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
  },
  obtenerDetalles: function () {
    for (const prop in this) {
      if (prop != "saludar" && prop != "obtenerDetalles") {
        console.log(`${prop}:${this[prop]}`);
      }
    }
  },
}; //object

//obtener valores
console.log(persona.nombre);
console.log(persona["curso"]);

//Agregar una nueva propiedad
persona.domicilio = "Pje Juan B justo 2034";

//Modificar valor de una propiedad
persona.curso = "Javascript Master";

//Eliminar una propiedad
delete persona.genero;

//Iterar un objeto
for (const prop in persona) {
  if (prop != "saludar") {
    console.log(`${prop}:${persona[prop]}`);
  }
}

//Arreglo de objetos
let alumnos = [
  { nombre: "Fabrizio", curso: "Fullstack" },
  { nombre: "Gabriela", curso: "React Avanzado" },
  { nombre: "Felipe", curso: "Github para expertos" },
];

for (let index = 0; index < alumnos.length; index++) {
  console.log(
    `Nombre:${alumnos[index].nombre} - Curso:${alumnos[index].curso}`
  );
}

alumnos.forEach((alumno) => {
  console.log(`Nombre:${alumno.nombre} - Curso:${alumno.curso}`);
});

//------------------------------------------------------------

let data = [
  {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  },
  {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg",
  },
  {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg",
  },
  {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "https://reqres.in/img/faces/10-image.jpg",
  },
  {
    id: 11,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    avatar: "https://reqres.in/img/faces/11-image.jpg",
  },
  {
    id: 12,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar: "https://reqres.in/img/faces/12-image.jpg",
  },
];

//Mostremos una lista con los nombres de los usuarios en orden alfabético por apellido
const listarNombres = () => {
  let usuarios = data.map((user) => {
    return `${user.last_name} ${user.first_name}`;
  });

  usuarios.sort().forEach((usuario, index) => {
    console.log(index + 1 + " - " + usuario);
  });
};

//Tarjeta de presentación

const tarjetasDePresentacion = () => {
  data.forEach((persona) => {
    document.write("<strong>------Tarjeta de presentación------</strong><br>");
    document.write(
      `<b>Nombre: </b>${persona.first_name} ${persona.last_name} <br>`
    );
    document.write(`<b>Correo: </b>${persona.email}<br><br>`);
  });
};
