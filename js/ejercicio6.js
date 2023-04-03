/*6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
*/

class Libro{
    constructor(isbn, titulo, autor, paginas){
        this._isbn = isbn;
        this._titulo = titulo;
        this._autor = autor;
        this._paginas = paginas;
    }
    get isbn(){
        return this._isbn
    }
    set isbn(nuevoIsbn){
        if(nuevoIsbn.length > 0){
            this._isbn = nuevoIsbn;
        }
    }
    get titulo(){
        return this._titulo
    }
    set titulo(nuevoTitulo){
        if(nuevoTitulo.length > 0){
            this._titulo = nuevoTitulo;
        }
    }
    get autor(){
        return this._autor
    }
    set autor(nuevoAutor){
        if(nuevoAutor.length > 0){
            this._autor = nuevoAutor;
        }
    }
    get paginas(){
        return this._paginas
    }
    set paginas(nuevaPagina){
        if(nuevaPagina.length > 0){
            this._paginas = nuevaPagina;
        }    
    }
    mostrarLibro(){
        document.write(`<p>El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene páginas ${this.paginas}</p>`);
    }
}

const libro1 = new Libro ('8000120303-2', 'El principito', 'Antoine de Saint-Exupéry', 120);
const libro2 = new Libro ('8900012405-1', 'All Tomorrows', 'Cevdet Mehmet Kösemen', 111);

libro1.mostrarLibro();
libro2.mostrarLibro();

if(libro1.paginas>libro2.paginas){
    document.write(libro1.titulo+" tiene mas paginas " + libro1.paginas + " en total")
}else{
    document.write(libro2.titulo+" tiene mas paginas " + libro2.paginas + " en total")
}

