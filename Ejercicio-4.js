"use strict";
// Clase Círculo que implementa la interfaz Forma
class Circulo {
    constructor(radio) {
        this.radio = radio;
    }
    calcularArea() {
        return Math.PI * Math.pow(this.radio, 2);
    }
}
// Clase Rectángulo que implementa la interfaz Forma
class Rectangulo {
    constructor(ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
    }
    calcularArea() {
        return this.ancho * this.alto;
    }
}
// Función que usa polimorfismo para calcular el área de cualquier forma
function imprimirArea(forma) {
    console.log(`El área es: ${forma.calcularArea()}`);
}
// Uso de polimorfismo
let circulo = new Circulo(5);
let rectangulo = new Rectangulo(10, 20);
imprimirArea(circulo);
imprimirArea(rectangulo);
