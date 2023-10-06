// Definir la clase Servicio 
class Servicio {
    constructor(titulo, variedades, img) {
        this.titulo = titulo;
        this.variedades = variedades;
        this.img = img;
    }
}

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

// propiedades servicio gestion tributaria
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



// propiedades servicio gestion empresarial
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


// propiedades servicio gestion contable
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


//propiedades servicioGestionTalentoHumano
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


//propiedades Asesoría en Ecosistema Electrónico
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



//propiedades Apoyo en Procedimiento Organizacional
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


//seccion de llamada de funciones

// Llama a la función mostrarServicio() con los datos dinámicos
mostrarServicio(gestionTalentoHumano); // nota se debe llamar en la funcion la variable donde se instació el objeto

