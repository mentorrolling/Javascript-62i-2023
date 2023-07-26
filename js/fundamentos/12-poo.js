//clases => molde | prototipo

class Usuario {
  constructor(name, username, password, state = true) {
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

class Administrador extends Usuario {
  constructor(name, username, password, role = "admin", state) {
    super(name, username, password, state);
    this.role = role;
  }
  superPresentacion() {
    this.tarjetaPresentacion();
    console.log(`Rol: ${this.role}`);
  }
}

/*
    Cuenta bancaria
        1-Escribe un programa para crear cuentas bancarias con las siguientes propiedades:
        - Una propiedad titular.
        - Una propiedad saldo, teniendo como valor inicial 0.
        - Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
        - Un método extraer() que permita retirar la cantidad pasada como parámetro.
        - Un método informar() que retorne la información del estado de la cuenta. 
        - Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
    */

class Cuenta {
  constructor(titular, saldo = 0) {
    this.titular = titular;
    this.saldo = saldo;
  }
  ingresar(valor) {
    if (valor < 0) {
      console.warn("Monto inválido");
    } else {
      this.saldo += valor;
    }
    this.informe();
  }
  egreso(valor) {
    if (valor > this.saldo || valor < 0) {
      console.warn("Monto inválido o Saldo insuficiente");
    } else {
      this.saldo -= valor;
    }
    this.informe();
  }
  informe() {
    console.log("------Estado de la cuenta------");
    console.log(`Titular: ${this.titular}`);
    console.log(`Saldo: ${this.saldo}`);
  }
}

let cuenta001 = new Cuenta("Leo Z");
let cuenta002 = new Cuenta("Alejandra 1.0");
