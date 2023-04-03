/*7- Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt, las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.

*/

class Contacto {

    #nombre;
    #telefono;

    constructor(nombre, telefono){
        this.#nombre = nombre;
        this.#telefono = telefono;
    }

    get nombre(){
      return  this.#nombre;
    }

    set nombre(nuevoNombre){
        this.#nombre = nuevoNombre
    }

    get telefono(){
       return this.#telefono;
    }

    set telefono(nuevoTelefono){
        this.#telefono = nuevoTelefono;
    }
}

class Agenda {

    constructor(tamanio = 3){
        this._contactos = [];
        this._tamanio = tamanio;
    }

    get contactos (){
      return this._contactos;
    }

    set contactos(nuevoContacto){
        this._contactos.push(nuevoContacto)
    }

    get tamanio (){
       return this._tamanio;
    }

    set tamanio(nuevoTamanio){
        if (nuevoTamanio >= this.tamanio) {
            console.log(`Su agenda tiene más contactos que el tamaño máximo que intenta establecer. Por favor, la cantidad al menos ${this.tamanio - nuevoTamanio} e intente nuevamente.`)
        } else {
            this._tamanio = nuevoTamanio
        }  
    }

    aniadirContacto(contactoNuevo) {
        if(!this.agendaLlena()) {
            this.contactos = contactoNuevo;
        }
    }

    existeContacto(contactoNuevo){
        for (let key in this._contactos) {
            if (this._contactos[key].nombre === contactoNuevo.nombre){
              return true;
            }
        }
        return false;
    }

    listarContactos(){
        document.write('<ul>')
        for(let listarContactos=0; listarContactos < this._contactos.length; listarContactos++){
           document.write(`<li>Nombre: ${this._contactos[listarContactos].nombre} - Telefono: ${this._contactos[listarContactos].telefono} </li>`);
        }
        document.write('</ul>');
    }

    buscarContacto(nombreDeContacto){
        const index = this.contactos.findIndex((contactoNuevo) => {
            return contactoNuevo.nombre == nombreDeContacto;
        })

        if (index != -1) {
            let contactoEncontrado = this.contactos[index];
            document.write(`Nombre: ${contactoEncontrado.nombre}, Telefono: ${contactoEncontrado.telefono}`)
            return this.contactos[index];
        } else{
            alert(`El contacto no existe`);
        }
    }

    eliminarContacto(contactoaEliminar){
        const index = this.contactos.findIndex((contactoNuevo) => {
            return contactoNuevo.nombre == contactoaEliminar.nombre;
        })
        if(index != -1) {
            this.contactos.splice(index, 1);
            alert(`El contacto fue eliminado`);
        } else {
            alert("El contacto no existe");
        }
    }

    agendaLlena() {
        if(this._contactos.length >= this._tamanio){
            alert('Agenda llena');
            return true;
        } else {
            return false;
        }
    }
    
    huecosLibres(){
        return parseInt(this.tamanio) - parseInt(this.contactos.length);
    }
}

let agendaNueva = new Agenda();

do{
    const opcion = prompt(`Seleccione una de las siguientes opciones:
1- Añadir un contacto
2-Verificar si existe un contacto
3- Listar los contactos
4-Buscar un contacto
5-Eliminar un contacto
6-Verificar si la agenda esta llena
7-Verificar espacios disponibles en la agenda
8-Modificar el tamaño de la agenda`);

switch(opcion){
    case '1':
        if (!agendaNueva.agendaLlena()) {
            let nombre = prompt('ingrese un nombre');
            let telefono = parseInt(prompt('ingrese un telefono'));
            let contactoNuevo = new Contacto(nombre, telefono);
            agendaNueva.aniadirContacto(contactoNuevo);
        }
        break;
    case '2':
        agendaNueva.existeContacto();
    break;
    case '3':
        agendaNueva.listarContactos();
    break;
    case '4':
        let nombreBuscar = prompt(`Ingrese el nombre de su contacto`);
        agendaNueva.buscarContacto(nombreBuscar);
    break;
    case '5':
        let nombreBorrar = prompt(`Ingrese el nombre de su contacto que desea eliminar`);
        let numeroBorrar = prompt(`Ingrese el telefono de la persona que desee eliminar`);
        let contactoaEliminar = new Contacto(nombreBorrar, numeroBorrar);
        agendaNueva.eliminarContacto(contactoaEliminar);
    break;
    case '6':
        agendaNueva.agendaLlena();
    break;
    case '7':
        agendaNueva.huecosLibres();
    break;
    case '8':
        let nuevoTamanioAgenda = parseInt(prompt(`Ingrese un nuevo Tamaño de Agenda`));
        agendaNueva.nuevoTamanio = nuevoTamanioAgenda;
        break;
    default:
        alert('Ingresaste una opcion incorrecta');
}
}while(prompt('Desea realizar otra operacion) (s/n)') === 's')