/*1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

Output:



objeto.encender();
objeto.apadar()
auto encendido
El auto se apagó */

let auto = {
    // propiedades -> key: value
    marca: 'Volkswagen',
    modelo: 'Volkswagen Polo',
    color: 'Rojo',
    largo: 4.057,
    ancho: 1.751,
    anio: 1975,
    potencia: '150 cv',
    precio: '4,838 millones ARS' ,
    //metodos
    encender: ()=>{
        document.write('<p>El auto se encendio</p>');
    },
    apagar: ()=>{
        document.write('<p>El auto se apago</p>');
    },
}
document.write(`Auto marca: ${auto.marca}`);
document.write(`<br>Modelo: ${auto.modelo}`);
document.write(`<br>Color: ${auto.color}`);
document.write(`<br>Largo: ${auto.largo}`);
document.write(`<br>Ancho: ${auto.ancho}`);
document.write(`<br>Año de Salida: ${auto.anio}`);
document.write(`<br>Potencia : ${auto.potencia}`);
document.write(`<br>Precio : ${auto.precio}`);

auto.encender();
auto.apagar();