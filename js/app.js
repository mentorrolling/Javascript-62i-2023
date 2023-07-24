//clases => molde | prototipo

class Usuario {
  constructor(name, username, password, state) {
    this.nombre = name;
    this.username = username;
    this.pass = password;
    this.estado = state;
  }
  tarjetaPresentacion() {
    console.log("------Tarjeta de presentación------");
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Username: ${this.username}`);
  }
  cambiarEstado() {
    this.estado = !this.estado;
  }
}

let user1 = new Usuario("José", "josecitowin", "12345678", true);
let user2 = new Usuario("Florencia", "florrosa", "12345678", true);
let user3 = new Usuario("Pablo", "pmarino", "mi_mama_me_mima", true);
