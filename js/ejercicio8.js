//8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".
class Persona{
    constructor(nombre, edad, profesion){
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }
    mostrarDatos(){
        document.write(`<p>${this.nombre} - ${this.edad} años - ${this.profesion}`);
    }
    saludar(){
        document.write(`<p>${this.nombre} dijo: Hola</p>`);
    }
    despedirse(){
        document.write(`<p>${this.nombre} dijo: Adios</p>`);
    }
}

const persona1 = new Persona('Tomas', 21, 'Soldado');
const persona2 = new Persona('Benjamin', 19, 'Cajero');

persona1.mostrarDatos();
persona2.mostrarDatos();
persona1.saludar();
persona2.saludar();
persona1.despedirse();
persona2.despedirse();
