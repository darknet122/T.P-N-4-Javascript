/* 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
*/
class cuenta{
    constructor(titular, saldo){
        this.titular = titular;
        this.saldo = saldo;
    }

    ingresar(dineroADepositar) {     
     this.saldo = this.saldo + dineroADepositar;
     document.write(`<p>${this.titular} ingreso a la cuenta $${dineroADepositar}. El saldo actual es: ${this.saldo}.</p>`)
    }

    extraer(dineroAExtraer) {
        if (this.saldo < dineroAExtraer) {
            document.write(`<p>Su saldo es insuficiente para extraer $${dineroAExtraer}`);
        } else {
            this.saldo = this.saldo - dineroAExtraer;
            document.write(`<p>${this.titular} retiró $${dineroAExtraer} de la cuenta. El saldo actual es: ${this.saldo}.</p>`)
        }
        
    }

    informar() {
        document.write(`<p>Cliente: ${this.titular}</p><p>Su saldo es: $${this.saldo}</p>`);
    }
}

const persona1 = new cuenta ('Alex', 0);
let dineroADepositar = parseInt(prompt('Ingrese la cantidad a depositar: '));
persona1.ingresar(dineroADepositar);
let dineroAExtraer = parseInt(prompt('Ingrese la cantidad de dinero a extraer: '));
persona1.extraer(dineroAExtraer);
persona1.informar();