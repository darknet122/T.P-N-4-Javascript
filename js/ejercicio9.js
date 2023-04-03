//9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado. 
class Animal {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    emitirSonido(){
    }
}

class Gato extends Animal{
    constructor(nombre, edad){
        super(nombre, edad);
    }
    emitirSonido(){
        document.write(`<p>Gato: ${this.nombre}, edad del animal: ${this.edad} años</p>`);
        document.write(`<p>miau</p>`);
    }
}

class Perro extends Animal{
    constructor(nombre, edad){
        super(nombre, edad);
    }
    emitirSonido(){
        document.write(`<p>Perro: ${this.nombre}, edad del animal: ${this.edad} años</p>`)
        document.write(`<p>Guau</p>`);
    }
}

const animal1 = new Perro('Kirby', 10);
const animal2 = new Gato('Kenai', 7);

animal1.emitirSonido();
animal2.emitirSonido();