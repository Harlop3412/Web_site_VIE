// Clase personalizada extendida desde la clase Image //atl+96 ´´
class InicioClientes extends Image {
    constructor(src, alt, descripcion) {
        super();//metodo necesario para buena funcion de clase nativa Image
        this.src = src;
        this.alt = alt;
        this.id = `cliente-${clientes.length + 1}`; // Genera un ID único basado en la longitud del array 'clientes'
        this.descripcion = `descripcion`;
        this.mostrarDetalles(); // llamar metodo para que se muestre al crear objetos directamente 
    }

    mostrarDetalles() {
        console.log(`
        Fuente: ${this.src} 
        Texto alternativo: ${this.alt}
        Id: ${this.id}
        Descripción: ${this.descripcion}`);
    }
}

// Array para almacenar instancias de clientes
const clientes = [];
// Instanciación de objetos y agregación al array 'clientes'
const cliente1 = new InicioClientes('/multimedia/galeria_inicio/logo_grinsa.png', 'logo-grinsa', 'grinsa_ingenieria_sas');
console.log(cliente1);
const cliente2 = new InicioClientes('logo_vapor.png', 'logo-vapor', 'Vapor_y_mantenimiento_sas');
// const cliente3 = new InicioClientes('ruta3.jpg', 'Texto alternativo 3', 'Descripción 3');

// Agregar los objetos al array 'clientes'
clientes.push(cliente1, cliente2);
// recorre array 'clientes' muestra id
function infoCliente (array) {
    for (let el of array) {
        console.log(el.alt, el.src, el.id, el.descripcion);
        console.log();
    }
}
infoCliente(clientes);
console.log(clientes);

// clientes.push(cliente2);
// clientes.push(cliente3);

// Función para abrir la modal
function abrirModal(imgSrc, imgAlt, imgDescripcion) {
    const modal = document.getElementById('imagenModal');
    console.log(`div modal ${modal}`)
    const modalContent = modal.querySelector('.modal-content');
    console.log(`div hijo modal ${modalContent}`)
    // Crea una nueva instancia de la clase personalizada
    const imagenAmpliada = new InicioClientes(imgSrc, imgAlt, imgDescripcion);
    console.log(imagenAmpliada.complete);//indica si la imagen se ha cargado completamente
    console.log();
    // Limpia el contenido anterior de la modal
    modalContent.innerHTML = '';

    // Agrega la nueva instancia al contenido de la modal
    modalContent.appendChild(imagenAmpliada);
    console.log(modalContent);

    // Muestra la modal
    modal.style.display = 'block';
    console.log(`funcion abrir modal ${modal}`)
}

// Función para cerrar la modal
function cerrarModal() {
    const modal = document.getElementById('imagenModal');
    // Oculta la modal
    modal.style.display = 'none';
    console.log(`funcion cerrar modal ${modal}`)
}

// Función para agregar eventos a las miniaturas
function agregarEventosAMiniaturas() {
    const miniaturas = document.querySelectorAll('.inicio__galery img');
    //id en el header
    const ocultarHeader = document.getElementById('header');
    miniaturas.forEach((miniatura) => {
        miniatura.addEventListener('click', () => {
            // Pasamos la fuente, el texto alternativo y la descripción a la función abrirModal
            abrirModal(miniatura.src, miniatura.alt,);
            console.log(`funcion agregar evento miniatura ${miniatura.src}`);
            //oculta el header al abrir la modal
            ocultarHeader.style.display = 'none';
            console.log(`oculta header`)
        });

    });
}

// Función para agregar el evento al enlace de cierre
function agregarEventoACierre() {
    const enlaceCierre = document.querySelector('#cerrar');
    const muestraHeader = document.getElementById('header');

    enlaceCierre.addEventListener('click', () => {
        cerrarModal();//llama la funcion creada para cerrar la modal
        console.log(`funcion cierre ${enlaceCierre.innerHTML}`)
        muestraHeader.style.display = 'block';
        console.log(`muestra header`);

    });
}

// Espera a que se cargue el DOM y luego agrega los eventos
document.addEventListener('DOMContentLoaded', () => {
    agregarEventosAMiniaturas();
    agregarEventoACierre();
    console.log(`evento DOMContentLoaded `)
});