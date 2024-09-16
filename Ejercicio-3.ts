// Clase base Animal
class Animal {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    describir(): void {
        console.log(`${this.nombre} tiene ${this.edad} años.`);
    }
}

// Clase derivada Tortuga
class Tortuga extends Animal {
    constructor(nombre: string, edad: number) {
        super(nombre, edad);
    }

    nadar(): void {
        console.log(`${this.nombre} está nadando.`);
    }
}

// Clase derivada Perico
class Perico extends Animal {
    constructor(nombre: string, edad: number) {
        super(nombre, edad);
    }

    volar(): void {
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
