"use strict";
// Clase base Animal
class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    describir() {
        console.log(`${this.nombre} tiene ${this.edad} años.`);
    }
}
// Clase derivada Tortuga
class Tortuga extends Animal {
    constructor(nombre, edad) {
        super(nombre, edad);
    }
    nadar() {
        console.log(`${this.nombre} está nadando.`);
    }
}
// Clase derivada Perico
class Perico extends Animal {
    constructor(nombre, edad) {
        super(nombre, edad);
    }
    volar() {
        console.log(`${this.nombre} está volando.`);
    }
}
// Uso de las clases
let tortuga = new Tortuga('Manuelita', 80);
let perico = new Perico('Paco', 2);
tortuga.describir();
tortuga.nadar();
perico.describir();
perico.volar();
