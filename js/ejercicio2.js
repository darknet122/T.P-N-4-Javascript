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
    ingresar(){
     this.ingresar = prompt('Ingrese dinero');
     document.write(`<p>${this.titular} ingreso a la cuenta ${this.ingresar} pesos</p>`)
    }
    extraer(){
         this.extraer = prompt('Ponga cuanto va a retirar');
        document.write(`<p>${this.titular} retiro de la cuenta ${this.extraer} pesos</p>`)
    }
    informar(){
        let resta = parseInt (this.ingresar) - parseInt (this.extraer);
        document.write('Usted tiene en la cuenta actualmente: '+resta + ' pesos')
    }
}

const persona1 = new cuenta ('Alex', 0);
persona1.ingresar();
persona1.extraer();
persona1.informar();