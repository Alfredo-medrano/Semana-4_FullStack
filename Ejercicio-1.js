"use strict";
// Clase superior Vehículo
class Vehiculo {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
    mostrarDetalles() {
        console.log(`${this.marca} ${this.modelo} - Año: ${this.año}`);
    }
}
// Objetos derivados de la clase Vehículo
let automovil = new Vehiculo('Toyota', 'Corolla', 2020);
let motocicleta = new Vehiculo('Yamaha', 'MT-07', 2021);
automovil.mostrarDetalles();
motocicleta.mostrarDetalles();
