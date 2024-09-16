var CuentaBancaria = /** @class */ (function () {
    function CuentaBancaria(saldoInicial) {
        this.saldo = saldoInicial;
    }
    // Método para depositar dinero
    CuentaBancaria.prototype.depositar = function (cantidad) {
        if (cantidad > 0) {
            this.saldo += cantidad;
            console.log("Se depositaron ".concat(cantidad, ". Saldo actual: ").concat(this.saldo));
        }
    };
    // Método para retirar dinero
    CuentaBancaria.prototype.retirar = function (cantidad) {
        if (cantidad > 0 && cantidad <= this.saldo) {
            this.saldo -= cantidad;
            console.log("Se retiraron ".concat(cantidad, ". Saldo actual: ").concat(this.saldo));
        }
        else {
            console.log("No se puede retirar esa cantidad. Fondos insuficientes.");
        }
    };
    // Método para obtener el saldo actual
    CuentaBancaria.prototype.obtenerSaldo = function () {
        return this.saldo;
    };
    return CuentaBancaria;
}());
// Uso de la clase
var cuenta = new CuentaBancaria(500);
cuenta.depositar(200);
cuenta.retirar(100);
// No se puede retirar más de lo que hay
cuenta.retirar(700);
