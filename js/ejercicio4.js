/*4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.
*/
class Producto {
    constructor(codigo, nombre, precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }
    mostrarDatos(){
        document.write(`<li>Nombre: ${this.nombre}, Codigo: ${this.codigo}, Precio: $${this.precio}</li>`)
       }
    }


let productos = [];
productos.push(new Producto(1, "Nokia 1100", 40000));
productos.push(new Producto(2, "Samsung Galaxy A04e 32GB", 42000));
productos.push(new Producto(3, "Motorola G100", 60000));

document.write('<ul>')
for (let i in productos) {
    productos[i].mostrarDatos();
}
document.write('</ul>')
