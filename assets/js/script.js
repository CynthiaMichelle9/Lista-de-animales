class Propietario {
    constructor(nombre, direccion, telefono) {
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
    }
    
    datosPropietario() {
        return `Nombre: ${this._nombre}, Dirección: ${this._direccion}, Teléfono: ${this._telefono}`;
    }
}

class Animal {
    constructor(tipo) {
        this._tipo = tipo;
    }

    getTipo() { 
        return this._tipo; 
    }
}

class Mascota extends Animal {
    constructor(nombre, tipo) {
        super(tipo);
        this._nombre = nombre;
    }

    getNombre() { 
        return this._nombre; 
    }

    setNombre(nombre) {
        this._nombre = nombre;
    }
}

class Consulta {
    constructor(motivo, animal, propietario) {
        this._motivo = motivo;
        this._animal = animal;
        this._propietario = propietario;
    }

    getConsultaInfo() {
        return `
        El tipo de animal es un: ${this._animal.getTipo()}, 
        mientras que el nombre de la mascota es: ${this._animal.getNombre()}
        y la enfermedad es: ${this._motivo}`;
    }
}


const propietario = new Propietario("Juan", "Calle Principal 123", "123456789");
const mascota = new Mascota("Bobby", "Perro");
const consulta = new Consulta("Vacunación", mascota, propietario);
console.log(consulta.getConsultaInfo());


document.addEventListener("DOMContentLoaded", function () {
    const botonAgregar = document.getElementById("botonAgregar");
    botonAgregar.addEventListener("click", agregarConsulta);

    function agregarConsulta(event) {
        event.preventDefault();

        const nombrePropietario = document.getElementById("propietario").value;
        const direccionPropietario = document.getElementById("direccion").value;
        const telefonoPropietario = document.getElementById("telefono").value;
        const tipoAnimal = document.getElementById("tipo").value;
        const nombreMascota = document.getElementById("nombreMascota").value;
        const motivoConsulta = document.getElementById("enfermedad").value;

        const propietario = new Propietario(nombrePropietario, direccionPropietario, telefonoPropietario);
        const mascota = new Mascota(nombreMascota, tipoAnimal);
        const consulta = new Consulta(motivoConsulta, mascota, propietario);

        const mensaje = consulta.getConsultaInfo();
        mostrarMensaje(mensaje);
    }

    function mostrarMensaje(mensaje) {
        const listaMensajes = document.querySelector("#resultado ul");
        const nuevoMensaje = document.createElement("li");
        nuevoMensaje.textContent = mensaje;
        listaMensajes.appendChild(nuevoMensaje);
    }
});
