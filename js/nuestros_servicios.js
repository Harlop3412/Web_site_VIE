// Definir la clase Servicio 
class Servicio {
    constructor(titulo, variedades, img) {
        this.titulo = titulo;
        this.variedades = variedades;
        this.img = img;
    }
}


// propiedades servicio gestion tributaria posicion [0]
const tituloServicioTrabutario = 'Apoyo en Gestión Tributaria';
const asesoriaTributaria = [
    'Elaboración de declaraciones de impuestos nacionales, departamentales y municipales.',
    'Actualizaciones Fiscales.',
    'Auditorías Tributarias.',
    'Elaboración y presentación de informes especiales: Información Exógena de orden Nacional y Municipal.',
    'Informes y reportes a la Supersociedades.',
    'Informes y reportes al Banco de la República sobre operaciones internacionales.',
    'Planeación Tributaria.',
    'Asesoría Tributaria.',
];
console.log(`cantidad servicios asesorias tributarias: ${asesoriaTributaria.length}`);
//variable de ruta img
const imgServicioTributario = '../multimedia/nuestros_servicios/gestion_tributaria.jpg';
//instanciar objeto con clase Servicio
const gestionTributaria = new Servicio(tituloServicioTrabutario, asesoriaTributaria, imgServicioTributario)
console.log(gestionTributaria);
// Agrega un atributo 'alt' a la imagen
const altImgGestionTributaria = document.querySelector('.imagen-servicio');
altImgGestionTributaria.alt = 'gestion_contable';



// propiedades servicio gestion empresarial posicion [1]
const tituloGestionEmpresarial = 'Asesoría en Gestión Empresarial.';
const servicioGestionEmpresarial = [
    'Organización de la estructura administrativa y funcional de la empresa.',
    'Reestructuración Organizacional y Administrativa.',
    'Apoyo en manejo del recurso humano.',
    'Gestión de proyectos y seguimiento de indicadores clave de rendimiento para lograr metas y objetivos.',
    'Análisis financiero y elaboración de presupuestos para optimizar el uso de los recursos financieros.',
    'Evaluación y selección de proveedores para garantizar la calidad de los suministros y reducir costos.',
    'Auditorías internas y externas para garantizar el cumplimiento de regulaciones y estándares de la industria.',
];
console.log(`cantidad servicios gestion empresarial:  ${servicioGestionEmpresarial.length}`);
//variable de ruta img
const imgGestionEmpresarial = '../multimedia/nuestros_servicios/gestion_empresarial.jpg';
//instanciar objeto con clase Servicio
const gestionEmpresarial = new Servicio(tituloGestionEmpresarial, servicioGestionEmpresarial, imgGestionEmpresarial)
console.log(servicioGestionEmpresarial);
// Agrega un atributo 'alt' a la imagen
const altImgGestionEmpresarial = document.querySelector('.imagen-servicio');
altImgGestionEmpresarial.alt = 'gestion_contable';


// propiedades servicio gestion contable posicion [2]
const tituloGestionContable = 'Apoyo en Gestión Contable.';
const servicioGestionContable = [
    'Actualización contable.',
    'Manejo Integral de la contabilidad.',
    'Organización e implementación de sistemas contables.',
    'Preparación, elaboración y revisión de Estados Financieros.',
    'Consultoría en gestión de implementación.',
    'Ambientación Equipo Gerencial.',
    'Análisis y Diagnóstico del Plan de Cuentas.',
    'Mapeo y Paralelo de NIIF.',
    'Acompañamiento en Aplicativo Contable / SW / ERP.',
    'Plan de Trabajo.',
    'Acompañamiento en proceso de convergencia.',
    'Acompañamiento en proceso paralelo de registro Norma Local y NIF.',
    'Acompañamiento en Aplicación de NIF.',
];
console.log(`cantidad servicios gestion contable:  ${servicioGestionContable.length}`);
//variable de ruta img
const imgGestionContable = '../multimedia/nuestros_servicios/gestion_contable.jpg'
//instanciar objeto con clase Servicio
const gestionContable = new Servicio(tituloGestionContable, servicioGestionContable, imgGestionContable);
console.log(servicioGestionContable);
// Agrega un atributo 'alt' a la imagen
const altImgGestionContable = document.querySelector('.imagen-servicio');
altImgGestionContable.alt = 'gestion_contable';


//propiedades servicioGestionTalentoHumano posicion [3]
const tituloGestionTalentoHumano = 'Apoyo en Gestión de Talento Humano';
const servicioGestionTalentoHumano = [
    'Evaluación de desempeño de empleados y desarrollo de planes de mejora.',
    'Diseño de políticas de recursos humanos que fomenten un entorno laboral positivo.',
    'Implementación de sistemas de gestión de nómina y beneficios para empleados.',
    'Asesoramiento en procesos de reestructuración organizacional y cambios en la empresa.',
    'Auditorías de recursos humanos para garantizar el cumplimiento normativo y la eficiencia.',
];
console.log(`cantidad servicios gestion talento humano:  ${servicioGestionTalentoHumano.length}`);
//variable de ruta img
const imgGestionTalentoHumano = '../multimedia/nuestros_servicios/talento_humano.jpg'
//instanciar objeto con clase Servicio
const gestionTalentoHumano = new Servicio(tituloGestionTalentoHumano, servicioGestionTalentoHumano, imgGestionTalentoHumano);
console.log(servicioGestionTalentoHumano);
// Agrega un atributo 'alt' a la imagen
const altImgTalentoHumano = document.querySelector('.imagen-servicio');
altImgTalentoHumano.alt = 'talento_humano';


//propiedades Asesoría en Ecosistema Electrónico posicion [4]
const tituloAsesoriaEcosistemaElectronico = ' Asesoría en Ecosistema Electrónico';
const asesoriaEcosistemaElectronico = [
    'Implementación de la facturación electrónica para empresas.',
    'Capacitación y entrenamiento en el uso del buzón tributario.',
    'Generación y envío de comprobantes fiscales electrónicos.',
    'Gestión de la nómina electrónica para empleados.',
    'Asesoría en la adopción de sistemas de contabilidad en la nube.',
    'Servicios de almacenamiento y respaldo de documentos tributarios.',
    'Automatización de procesos contables y financieros mediante soluciones en la nube.',
    'Diseño y desarrollo de sitios web corporativos responsivos y personalizados.',
    'Configuración y administración de correos corporativos con dominio personalizado.',
];
console.log(`cantidad servicios asesoria ecosistema electronico:  ${asesoriaEcosistemaElectronico.length}`);
//variable de ruta img
const imgAsesoriaEcosistemaElectronico = '../multimedia/nuestros_servicios/ecosistema_electronico.jpg';
//instanciar objeto con clase Servicio
const ecosistemaElectronico = new Servicio(tituloAsesoriaEcosistemaElectronico, asesoriaEcosistemaElectronico, imgAsesoriaEcosistemaElectronico);
console.log(asesoriaEcosistemaElectronico);
// Agrega un atributo 'alt' a la imagen
const altImgEcosistemaElectronico = document.querySelector('.imagen-servicio');
altImgEcosistemaElectronico.alt = 'ecosistema_electronico';



//propiedades Apoyo en Procedimiento Organizacional posicion [5]
const tituloProcedimientoOrganizacional = 'Apoyo en Procedimiento Organizacional';
const asesoriaProcedimientoOrganizacional = [
    'Análisis y documentación de procesos internos para identificar áreas de mejora.',
    'Desarrollo de manuales de procedimientos que describan paso a paso las operaciones clave.',
    'Implementación de sistemas de gestión de calidad para estandarizar procesos.',
    'Capacitación y entrenamiento del personal en los procedimientos organizacionales.',
    'Evaluación y revisión periódica de los procedimientos para garantizar su eficacia y eficiencia.',
    'Identificación de áreas de riesgo y desarrollo de planes de contingencia para mitigar posibles problemas.',
    'Implementación de herramientas de seguimiento y control para monitorear el cumplimiento de los procedimientos.',
    'Auditorías internas para evaluar la conformidad con los procedimientos y recomendaciones para mejoras.'
];
console.log(`cantidad servicios asesoria ecosistema electronico:  ${asesoriaProcedimientoOrganizacional.length}`);
//variable de ruta img
const imgProcedimientoOrganizacional = '../multimedia/nuestros_servicios/procedimiento_organizacional.jpg';
//instanciar objeto con clase Servicio
const procedimientoOrganizacional = new Servicio(tituloProcedimientoOrganizacional, asesoriaProcedimientoOrganizacional, imgProcedimientoOrganizacional);
console.log(asesoriaProcedimientoOrganizacional);
// Agrega un atributo 'alt' a la imagen
const altImgProcedimientoOrganizacional = document.querySelector('.imagen-servicio');
altImgProcedimientoOrganizacional.alt = 'procedimiento_organizacional';
// console.log(altImgProcedimientoOrganizacional.alt);


//crear array general de objetos instanciados con clase const new Servicio
const arrayGeneralServicios = [gestionTributaria, gestionEmpresarial, gestionContable, gestionTalentoHumano, ecosistemaElectronico, procedimientoOrganizacional];
console.log(arrayGeneralServicios);


// Función para mostrar un servicio con título e imagen dinámicos
function mostrarServicio(servicio) {
    console.log('La función mostrarServicio() funciona correctamente');
    // Obtén referencias a los elementos del DOM
    const titulo = document.getElementById('tituloServicio');
    const listaServicio = document.querySelector('.lista-servicio');
    const imagen = document.querySelector('.imagen-servicio');

    // Asigna dinámicamente el título del servicio
    titulo.textContent = servicio.titulo;

    // Limpia cualquier contenido existente en la lista
    listaServicio.innerHTML = '';

    // Itera sobre las variedades de servicios y crea elementos <li> dinámicamente en el parametro que entra como variedades, para este caso lista de servicios de cada objeto creado con clase Servicios
    servicio.variedades.forEach((variedad) => {
        // Crea un elemento <li>
        const li = document.createElement('li');

        // Asigna el texto de la variedad de servicio al elemento <li>
        li.textContent = variedad;

        // Agrega el elemento <li> a la lista <ul>
        listaServicio.appendChild(li);
    });

    // Asigna dinámicamente la imagen del servicio
    imagen.src = servicio.img;
}


//funcion que abre la modal para un servicio, antigua
// Obtén una referencia al enlace del html que es el evento click por su ID
// function abrirModal(servicio) {
//     console.log('La función para agregar evento abrir modal cerrar header funciona correctamente');

//     //seccion de enlaces html 
//     const enlaceGestionEmpresarial = document.getElementById('divGestionEmpresarial');
//     console.log(enlaceGestionEmpresarial);

//     const ocultarHeader = document.getElementById('header');

//     enlaceGestionEmpresarial.addEventListener('click', function (e) {
//         e.preventDefault(); // Evita la acción predeterminada del enlace (navegar a una nueva página)

//         modalServicios.style.display = 'block'; // Muestra la modal (modalGeneral es el ID que está en el HTML de la modal)
//         ocultarHeader.style.display = 'none'; // Oculta el header al mostrar la modal
//         console.log('Evento clic para abrir la modal y ocultar el header');

//         // Llama a la función mostrarServicio() pasando el array como parámetro
//         mostrarServicio(servicio);
//         console.log(`Servicios mostrados: ${servicio}`);
//     });

// }
// abrirModal(gestionEmpresarial);

//funcion que abre la modal-servicios
function abrirModal(servicio, enlaceId) {

    console.log('La función para agregar evento abrir modal cerrar header funciona correctamente');
    // Obtén referencias a los elementos del DOM
    const enlace = document.getElementById(enlaceId);
    const modalServicios = document.getElementById('modalServicios');
    const ocultarHeader = document.getElementById('header');

    // Agrega un evento clic al enlace
    enlace.addEventListener('click', function (e) {
        e.preventDefault(); // Evita la acción predeterminada del enlace (navegar a una nueva página)

        modalServicios.style.display = 'block'; // Muestra la modal
        ocultarHeader.style.display = 'none'; // Oculta el header al mostrar la modal
        console.log('Evento clic para abrir la modal y ocultar el header');

        // Llama a la función mostrarServicio() pasando el servicio como parámetro
        mostrarServicio(servicio);
        console.log(`Servicios mostrados: ${servicio}`);
    });
}

// llamado a la funcion,  para cada objeto producto, se llama el servicio y el id
abrirModal(gestionEmpresarial, 'divGestionEmpresarial');
abrirModal(gestionTributaria, 'divGestionTributaria');
abrirModal(gestionContable, 'divGestionContable');
abrirModal(gestionTalentoHumano, 'divGestionTalentoHumano');
abrirModal(procedimientoOrganizacional, 'divProcedimientoOrganizacional');
abrirModal(ecosistemaElectronico, 'divEcosistemaElectronico');

// Función para cerrar la modal
function cerrarModal() {
    console.log(`funcion cerrarModal() funciona correctamente`)
    const cerrarModal = modalServicios.querySelector('.cerrarModal'); //modal general id del div padre del boton cerrar
    const mostrarHeader = document.getElementById('header'); //captura el header

    cerrarModal.addEventListener('click', () => {
        // Oculta la modal
        modalServicios.style.display = 'none';//oculta la modal (modalGeneral es el id que esta en el html de la modal)
        console.log(`evento cerrarModal() correcto`)
        mostrarHeader.style.display = 'block'; //muestra el header

    })

}
cerrarModal();

//funcion para abrir y cerrar la modal-form
function abrirModalForm() {
    console.log('La función abrirModalForm se está llamando correctamente.'); // Agregado para verificar que la función se llame correctamente.

    let comprarProducto = document.getElementById('btnContacto'); //boton que abre la modal-form, boton comprar que está en modalGeneral

    let cerrarModalForm = document.querySelector('#closeModalForm') //boton cerrarForm de servicios

    comprarProducto.addEventListener('click', () => {
        modalFormServicios.style.display = 'block'; // muestra la modal (modalFormProductos es el ID que esta en el html de la modal del formulario)
        console.log('evento muestra el form')
    })

    cerrarModalForm.addEventListener('click', ()=>{
        modalFormServicios.style.display = 'none'; //oculta la modal al hacer clic en el boton cerrar
        console.log('evento oculta el form')
    })
}
abrirModalForm()


//funcion para resetear formularios, avisar que los datos se enviaron. Nota: parametro formId es el id del formulario 
function resetearFormulario(formId) {
    console.log('La función resetearFormulario(formId) se está llamando correctamente.');
    const form = document.getElementById(formId);

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar la recarga de la página por defecto
        
        // Muestra la alerta con SweetAlert
        swal('Datos enviados correctamente', '', 'success')
            .then(() => {
                // Envía el formulario cuando se cierra la alerta
                form.submit();
                console.log('Evento submit función resetearFormulario(formId)');

                // Restablece el formulario después de enviarlo
                form.reset();
            });
    });
}

resetearFormulario("formFooter");
resetearFormulario('formFooterMap');
resetearFormulario('formProductoServicio');