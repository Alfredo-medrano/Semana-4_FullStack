// Clase superior Vehículo
class Vehiculo {
    marca: string;
    modelo: string;
    año: number;

    constructor(marca: string, modelo: string, año: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    mostrarDetalles(): void {
        console.log(`${this.marca} ${this.modelo} - Año: ${this.año}`);
    }
}

// Objetos derivados de la clase Vehículo
let automovil = new Vehiculo('Toyota', 'Corolla', 2020);
let motocicleta = new Vehiculo('Yamaha', 'MT-07', 2021);

automovil.mostrarDetalles();
motocicleta.mostrarDetalles();
