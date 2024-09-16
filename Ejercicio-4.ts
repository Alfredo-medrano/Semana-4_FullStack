// Interfaz Forma
interface Forma {
    calcularArea(): number;
}

// Clase Círculo que implementa la interfaz Forma
class Circulo implements Forma {
    radio: number;

    constructor(radio: number) {
        this.radio = radio;
    }

    calcularArea(): number {
        return Math.PI * Math.pow(this.radio, 2);
    }
}

// Clase Rectángulo que implementa la interfaz Forma
class Rectangulo implements Forma {
    ancho: number;
    alto: number;

    constructor(ancho: number, alto: number) {
        this.ancho = ancho;
        this.alto = alto;
    }

    calcularArea(): number {
        return this.ancho * this.alto;
    }
}

// Función que usa polimorfismo para calcular el área de cualquier forma
function imprimirArea(forma: Forma): void {
    console.log(`El área es: ${forma.calcularArea()}`);
}

// Uso de polimorfismo
let circulo = new Circulo(5);
let rectangulo = new Rectangulo(10, 20);

imprimirArea(circulo);
imprimirArea(rectangulo);
