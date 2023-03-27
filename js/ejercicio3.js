//3-Escribe una clase que permita crear distintos objetos “rectángulos”, 
//con las propiedades de alto y ancho, mas los métodos necesarios para modificar 
//y mostrar sus propiedades, calcular el perímetro y el área
class Rectangulo {

    #alto;
    #ancho;

    constructor(alto, ancho){
        this.#alto = alto;
        this.#ancho = ancho;
    }

    setAlto(nuevoValor) {
        this.#alto = nuevoValor;
    }

    getAlto() {
        return this.#alto;
    }

    setAncho(nuevoValor) {
        this.#ancho = nuevoValor;
    }

    getAncho() {
        return this.#ancho;
    }

    #calcularPerimetro() {        
        return parseInt((this.#alto * 2)) + parseInt((this.#ancho * 2));
    }

    #calcularArea() {
        return parseInt(this.#alto) * parseInt(this.#ancho);
    }

    mostrarPerimetro() {
        let perimetro = this.#calcularPerimetro();
        document.write(`<p>El perímetro es: ${perimetro}</p>`);
    }

    mostrarArea() {
        let area = this.#calcularArea();
        document.write(`<p>El área es: ${area}</p>`);
    }

}

const rectangulo1 = new Rectangulo(12,5);
rectangulo1.mostrarPerimetro();
rectangulo1.mostrarArea();

let rectangulo2 = new Rectangulo();
rectangulo2.setAlto(7);
rectangulo2.setAncho(8);
rectangulo2.mostrarArea();