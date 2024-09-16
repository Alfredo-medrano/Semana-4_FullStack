class CuentaBancaria {
    private saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    // Método para depositar dinero
    depositar(cantidad: number): void {
        if (cantidad > 0) {
            this.saldo += cantidad;
            console.log(`Se depositaron ${cantidad}. Saldo actual: ${this.saldo}`);
        }
    }

    // Método para retirar dinero
    retirar(cantidad: number): void {
        if (cantidad > 0 && cantidad <= this.saldo) {
            this.saldo -= cantidad;
            console.log(`Se retiraron ${cantidad}. Saldo actual: ${this.saldo}`);
        } else {
            console.log("No se puede retirar esa cantidad. Fondos insuficientes.");
        }
    }

    // Método para obtener el saldo actual
    obtenerSaldo(): number {
        return this.saldo;
    }
}

// Uso de la clase
let cuenta = new CuentaBancaria(500);
cuenta.depositar(200);
cuenta.retirar(100);
// No se puede retirar más de lo que hay
cuenta.retirar(700); 
