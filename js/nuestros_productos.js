/*clase constructora de productos*/
class Producto {
    constructor(nombre, cantidad, valor) {
        Producto.incrementarId(); // Incrementa el contador global al crear un objeto
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.valor = valor;
        this.id = contadorId; // Establece el ID con el contador global actual
        // this.mostrarDetalles();
    }

    static incrementarId() {
        contadorId++; //incrementa la variable global externa
    }

    mostrarDetalles() {
        console.log(`
        Nombre: ${this.nombre} 
        Cantidad: ${this.cantidad}
        valor: ${this.valor}
        Id: ${this.id}`);
    }
}

//variable global externa contador id unico
let contadorId = 0;

// console.log(productoFactura);
/* array facturacion*/
const productoFactura = []; //se debe declarar primero el array vacio y luego instanciar los objetos para luego hacer el push

let nombreFactura = 'Paquete de Facturación, emisión, recepción, título valor'; //me trabaja el nombre del producto en la modal

/*productos factura electronica*/
const productoFactura1 = new Producto(nombreFactura, 25 + ` Folios`, 71900 + ` COP`);
const productoFactura2 = new Producto(nombreFactura, 50 + ` Folios`, 83900 + ` COP`);
const productoFactura3 = new Producto(nombreFactura, 100 + ` Folios`, 130900 + ` COP`);
const productoFactura4 = new Producto(nombreFactura, 200 + ` Folios`, 196900 + ` COP`);
const productoFactura5 = new Producto(nombreFactura, 400 + ` Folios`, 294900 + ` COP`);
const productoFactura6 = new Producto(nombreFactura, 500 + ` Folios`, 328900 + ` COP`);
const productoFactura7 = new Producto(nombreFactura, 1000 + ` Folios`, 491900 + ` COP`);
const productoFactura8 = new Producto(nombreFactura, 2500 + ` Folios`, 1031900 + ` COP`);
const productoFactura9 = new Producto(nombreFactura, 5000 + ` Folios`, 1799900 + ` COP`);
const productoFactura10 = new Producto(nombreFactura, 10000 + ` Folios`, 3139900 + ` COP`);

// console.log(productoFactura);
productoFactura.push(productoFactura1, productoFactura2, productoFactura3, productoFactura4, productoFactura5, productoFactura6, productoFactura7, productoFactura8, productoFactura9, productoFactura10);
console.log(`cantidad productos facturación: ${productoFactura.length}`);

/* array nomina*/
const productoNomina = [];
let nombreNomina = 'Folios de Emision de Nómina Electrónica'

/*productos nomina*/
const productoNomina1 = new Producto(nombreNomina, 12 + ` Folios`, `$` + 47900 + ` COP`);
const productoNomina2 = new Producto(nombreNomina, 24 + ` Folios`, `$` + 47900 + ` COP`);
const productoNomina3 = new Producto(nombreNomina, 36 + ` Folios`, `$` + 76900 + ` COP`);
const productoNomina4 = new Producto(nombreNomina, 48 + ` Folios`, `$` + 81900 + ` COP`);
const productoNomina5 = new Producto(nombreNomina, 50 + ` Folios`, `$` + 83900 + ` COP`);
const productoNomina6 = new Producto(nombreNomina, 60 + ` Folios`, `$` + 93900 + ` COP`);
const productoNomina7 = new Producto(nombreNomina, 72 + ` Folios`, `$` + 102900 + ` COP`);
const productoNomina8 = new Producto(nombreNomina, 84 + ` Folios`, `$` + 112900 + ` COP`);
const productoNomina9 = new Producto(nombreNomina, 96 + ` Folios`, `$` + 126900 + ` COP`);
const productoNomina10 = new Producto(nombreNomina, 100 + ` Folios`, `$` + 130900 + ` COP`);
const productoNomina11 = new Producto(nombreNomina, 108 + ` Folios`, `$` + 138900 + ` COP`);
const productoNomina12 = new Producto(nombreNomina, 120 + ` Folios`, `$` + 147900 + ` COP`);
const productoNomina13 = new Producto(nombreNomina, 200 + ` Folios`, `$` + 196900 + ` COP`);
const productoNomina14 = new Producto(nombreNomina, 240 + ` Folios`, `$` + 224900 + ` COP`);
const productoNomina15 = new Producto(nombreNomina, 400 + ` Folios`, `$` + 294900 + ` COP`);
const productoNomina16 = new Producto(nombreNomina, 500 + ` Folios`, `$` + 328900 + ` COP`);
const productoNomina17 = new Producto(nombreNomina, 1000 + ` Folios`, `$` + 491900 + ` COP`);
const productoNomina18 = new Producto(nombreNomina, 2500 + ` Folios`, `$` + 1031900 + ` COP`);
const productoNomina19 = new Producto(nombreNomina, 5000 + ` Folios`, `$` + 1799900 + ` COP`);
const productoNomina20 = new Producto(nombreNomina, 10000 + ` Folios`, `$` + 3139900 + ` COP`);


// console.log(productoNomina);

productoNomina.push(productoNomina1, productoNomina2, productoNomina3, productoNomina4, productoNomina5, productoNomina6, productoNomina7, productoNomina8, productoNomina9, productoNomina10, productoNomina11, productoNomina12, productoNomina13, productoNomina14, productoNomina15, productoNomina16, productoNomina17, productoNomina18, productoNomina19, productoNomina20);

console.log(`cantidad productos nómina: ${productoNomina.length}`);

/* array documentos soporte electronico*/
const documentoSoporte = [];
const nombreDctoSoporte = 'Folios de Emisión de Documentos Soporte Electrónico'

/*productos documento soporte*/
const documentoSoporte1 = new Producto(nombreDctoSoporte, 25 + ` Folios`, `$` + 71900 + ` COP`);
const documentoSoporte2 = new Producto(nombreDctoSoporte, 50 + ` Folios`, `$` + 83900 + ` COP`);
const documentoSoporte3 = new Producto(nombreDctoSoporte, 100 + ` Folios`, `$` + 130900 + ` COP`);
const documentoSoporte4 = new Producto(nombreDctoSoporte, 200 + ` Folios`, `$` + 196900 + ` COP`);
const documentoSoporte5 = new Producto(nombreDctoSoporte, 400 + ` Folios`, `$` + 294900 + ` COP`);
const documentoSoporte6 = new Producto(nombreDctoSoporte, 500 + ` Folios`, `$` + 294900 + ` COP`);
const documentoSoporte7 = new Producto(nombreDctoSoporte, 1000 + ` Folios`, `$` + 294900 + ` COP`);
const documentoSoporte8 = new Producto(nombreDctoSoporte, 2500 + ` Folios`, `$` + 1031900 + ` COP`);
const documentoSoporte9 = new Producto(nombreDctoSoporte, 5000 + ` Folios`, `$` + 1799900 + ` COP`);
const documentoSoporte10 = new Producto(nombreDctoSoporte, 10000 + ` Folios`, `$` + 3139900 + ` COP`);

documentoSoporte.push(documentoSoporte1, documentoSoporte2, documentoSoporte3, documentoSoporte4, documentoSoporte5, documentoSoporte6, documentoSoporte7, documentoSoporte8, documentoSoporte9, documentoSoporte10);

console.log(`cantidad productos documento soporte electrónico: ${documentoSoporte.length}`);

/* array implementaciones y acompañamientos*/
const implementaciones = [];
const habilitacionResolucion = 'Implementación Habilitación de Resolucion';
const implementacionDocSoporte = 'Implementación Documento Soporte Electrónico';
const implementacionFactura = 'Implementación Factura Electrónica';
const implementacionNomina = 'Implementación Nómina Electrónica';
const implementacionBuzon = 'Implementación Buzón Tributario'
const comboImplementacion = 'Combos de Implementación';

/*productos implementaciones*/
const habilitacionResolucion1 = new Producto(habilitacionResolucion, `Habilitación de Resolución`, `$` + 60000 + ` COP`);
const implementacionDocSoporte1 = new Producto(implementacionDocSoporte, `Implementación Documento Soporte Electrónico`, `$` + 100000 + ` COP`);
/*implementacion factura electronica*/
const implementacionFactura1 = new Producto(implementacionFactura, 'Implementación Intermedio Factura', `$` + 220000 + ` COP`);
const implementacionFactura2 = new Producto(implementacionFactura, 'Implementación Premium Factura', `$` + 300000 + ` COP`);
/*implementacion nomina electronica*/
const implementacionNomina1 = new Producto(implementacionNomina, 'Implementación Básico Nómina', `$` + 150000 + ` COP`);
const implementacionNomina2 = new Producto(implementacionNomina, 'Implementación Intermedio Nómina', `$` + 220000 + ` COP`);
const implementacionNomina3 = new Producto(implementacionNomina, 'Implementación Premium Nómina', `$` + 220000 + ` COP`);
/*implementacion buzon tributario*/
const implementacionBuzon1 = new Producto(implementacionBuzon, 'Implementación Buzón Tributario CLIENTE FACTURATECH', `$` + 100000 + ` COP`);
/*combos de implementacion*/
const comboImplementacion1 = new Producto(comboImplementacion, 'Combo Implementación 2 (Puesta en marcha FIX + Implementación Factura electrónica + Implementación Nómina electrónica )', 290000);
const comboImplementacion2 = new Producto(comboImplementacion, 'Combo Intermedio Implementación', `$` + 300000 + ` COP `);
const comboImplementacion3 = new Producto(comboImplementacion, 'Combo Premium Implementación', `$` + 430000 + ` COP `);
const comboImplementacion4 = new Producto(comboImplementacion, 'Combo Intermedio Factura Electrónica / Buzón Tributario', `$` + 300000 + ` COP `);
const comboImplementacion5 = new Producto(comboImplementacion, 'Combo Premium Factura Electrónica / Buzón Tributario', `$` + 430000 + ` COP `);

implementaciones.push(habilitacionResolucion1, implementacionDocSoporte1, implementacionFactura1, implementacionFactura2, implementacionNomina1, implementacionNomina2, implementacionNomina3, implementacionBuzon1, comboImplementacion2, comboImplementacion3, comboImplementacion4, comboImplementacion5);
console.log(`cantidad productos en implementaciones y acompañamientos: ${implementaciones.length}`);

/*licencias FIX*/
const licenciasFix = [];
const nombreFix = 'Licencias Fix';
const licenciaAdicional = 0;
const leyendaAdicional = 'Si usted requiere más de una licencia para sucursales, coloque la cantidad de licencias que desee adquirir en el siguiente campo.'

const licenciasFix1 = new Producto(nombreFix, 'Licencia Fix Small ', `$` + 59900 + ` COP `);
const licenciasFix2 = new Producto(nombreFix, 'Licencia Fix Pyme ', `$` + 79900 + ` COP `);

licenciasFix.push(licenciasFix1, licenciasFix2);
console.log(`cantidad productos licencias Fix: ${licenciasFix.length}`);



/*array de productos generales abre la modal Nuestros Productos*/
const iconos = document.querySelectorAll('.icono');
//captura  el contenedor general de productos
// console.log(iconos);

const iconosProducto = Array.from(iconos) //convierte iconos que es un NodeList a un nuevo array con todas las propiedades
// console.log(iconosProducto);// se trabaja con este id 


// Función para abrir la modal-productos
function abrirModal(array) {

    const ocultarHeader = document.getElementById('header');

    // Limpia el contenido anterior de la modal
    array.innerHTML = '';
    console.log(` ${array.length} elementos estaticos html en el array iconosProducto que abre la modal`)

    array.forEach((el) => {
        el.addEventListener('click', () => {
            //seccion para mostrar la modal trabajacon array iconosProducto
            modalGeneral.style.display = 'block'; // muestra la modal (modalGeneral es el id que esta en el html de la modal)
            ocultarHeader.style.display = 'none'; //oculta el header al mostrar la modal
            console.log(`evento para abrir la modal y ocultar el header`)

            //seccion para mostrar los productos según donde se haga clic en el menú trabaja con arrays de productos
            // Obtén las referencias a los elementos HTML correspondientes se dedeb capturar desde el dom
            let facturaElectronica = document.getElementById('idFacturaElectronica');
            let nominaElectronica = document.getElementById('idNominaElectronica');
            let prodImplementaciones = document.getElementById('idImplementaciones');
            let docSoporte = document.getElementById('idDocumentoSoporte');
            let licFix = document.getElementById('idLicenciasFix');
            let buzTributario = document.getElementById('idBuzonTtributario');

            // Definir las referencias a los arrays de productos darles los valores de los arrays de trabajo
            let arrayFactura = productoFactura;
            let arrayNomina = productoNomina;
            let arrayImplementaciones = implementaciones;
            let arrayDocumentoSoporte = documentoSoporte;
            let arrayLicFix = licenciasFix;
            let arraybuzTributario = productoFactura;

            // Verificar qué elemento fue clicado usando(.contains),y mostrar el array correspondiente
            if (facturaElectronica && facturaElectronica.contains(el)) {
                mostrarProductos(arrayFactura);
                console.log('evento funcion abrir modal: factura');
            } else if (nominaElectronica && nominaElectronica.contains(el)) {
                mostrarProductos(arrayNomina);
                console.log('evento funcion abrir modal: nomina');
            } else if (prodImplementaciones && prodImplementaciones.contains(el)) {
                mostrarProductos(arrayImplementaciones);
                console.log('evento funcion abrir modal: implementaciones');
            } else if (docSoporte && docSoporte.contains(el)) {
                mostrarProductos(arrayDocumentoSoporte);
                console.log('evento funcion abrir modal: documento soporte');
            } else if (licFix && licFix.contains(el)) {
                mostrarProductos(arrayLicFix);
                console.log('evento funcion abrir modal: licencias fix');
            } else if (buzTributario && buzTributario.contains(el)) {
                mostrarProductos(arraybuzTributario);
                console.log('evento funcion abrir modal: buzon tributario');
            }

            // Llama a la función después de crear los elementos dinámicos
            aplicarEstilosYSeleccion();
            console.log(`llamada en el evento aplicarEstilosYSeleccion() correcto`);
        })
        
    });

}
console.log()

document.addEventListener("DOMContentLoaded", function () {
    abrirModal(iconosProducto);
    // console.log(`funcion DOMcontent: ${iconosProducto.length}`);

});


// Función para cerrar la modal
function cerrarModal() {
    console.log(`funcion cerrarModal() funciona correctamente`)
    const cerrarModal = modalGeneral.querySelector('.cerrarModal'); //modal general id del div padre del boton cerrar
    const mostrarHeader = document.getElementById('header'); //captura el header

    cerrarModal.addEventListener('click', () => {
        // Oculta la modal
        modalGeneral.style.display = 'none';//oculta la modal (modalGeneral es el id que esta en el html de la modal)
        console.log(`evento cerrarModal() correcto`)
        mostrarHeader.style.display = 'block'; //muestra el header

    })

}
cerrarModal();

/*funcion para mostrar los productos en la modal*/
function mostrarProductos(array) {

    let nombreProducto = modalGeneral.querySelector('#nombreProducto');
    let cantidadFolios = modalGeneral.querySelector('#cantidadFolios');
    let valorFolios = modalGeneral.querySelector('#valorFolios');
    let arrayProductos = modalGeneral.querySelector('#divProductos');

    arrayProductos.classList.add('productoFlex'); //NOTA** esta clase se está aplicando al elemento con el ID divProductos en JavaScript, y no es necesario que la agregarla manualmente en el HTML.

    // Limpia el contenido anterior del div de productos
    arrayProductos.innerHTML = '';

    // Limpia el contenido anterior del h3 de productos en el html
    nombreProducto.innerHTML = '';
    //crea un div por cada producto en la variable crearDiv #div en html
    let crearh3 = document.createElement('h3');

    //crea h3 y se da la clase al div #nombreProducto en el html
    crearh3.innerHTML = `
     <h3>${nombreProducto}</h3>
     `
    nombreProducto.appendChild(crearh3); //agregar el div creado en crearh3 a la var nombreProducto
    // console.log(`el nombre del producto es: ${nombreProducto.textContent}  sale asi por que usa la propiedad antes del bucle pero fuera`);

    array.forEach((producto) => {
        // para utilizar propiedades de la clase Producto se debe incluir en el forEach 
        nombreProducto.textContent = producto.nombre;//usa el array  creado con la clase Producto
        // console.log(`dentro del forEach nombre del producto es: ${nombreProducto.textContent}`);
        cantidadFolios = producto.cantidad;
        // console.log(` ${cantidadFolios}`);
        valorFolios = producto.valor;
        // console.log(` ${valorFolios}`);

        //crea un div por cada producto en la variable crearDiv #div en html
        let crearDiv = document.createElement('div');
        crearDiv.classList.add('producto__seleccionado');// padre de cont__producto NO trabaja css, la clase se crea para trabajar la fn de seleccion de elementos dinamicos

        //crear la plantilla a imprimir 
        crearDiv.innerHTML =
            //clase cont__producto da estilos css y hover a los contenedores dinamicos 
            `
        <div class="cont__producto " >
            <div class=" fa-solid fa-print</div>
            <div class=" ">id ${producto.id}</div>
            <div id="cantidadFolios">${producto.cantidad}</div>
            <div id="valorFolios">${producto.valor}</div>
        </div>
        `;

        //agregar crearDiv(plantilla) al div donde se imprimen en el html arrayPrductos
        arrayProductos.appendChild(crearDiv);
    });
    // NOTA*** Después del bucle, puedes usar nombreProducto si lo necesitas fuera del bucle
    console.log(`el nombre del producto es: ${nombreProducto.textContent}  llamandolo despues del bucle pero fuera`);
}

console.log();

// Esta función se encargará de aplicar los estilos y la funcionalidad de selección a los elementos dinámicos.
function aplicarEstilosYSeleccion() {
    console.log('La función aplicarEstilosYSeleccion se está llamando correctamente.'); // Agregado para verificar que la función se llame correctamente.

    // Selecciona todos los elementos con la clase "producto__seleccionado"
    const elementosSeleccionables = document.querySelectorAll('.producto__seleccionado');

    // Agrega un console.log para verificar la longitud de elementosSeleccionables
    console.log(`Número de elementos seleccionables: ${elementosSeleccionables.length}`);

    elementosSeleccionables.forEach((elemento) => {
        elemento.addEventListener('click', () => {
            // Comprueba si el elemento tiene la clase "seleccionado"
            if (elemento.classList.contains('seleccionado')) {
                // Si la tiene, la quita
                elemento.classList.remove('seleccionado');
                console.log(`elemento ${elemento} remove`);
            } else {
                // Si no la tiene, la agrega
                elemento.classList.add('seleccionado');
                console.log(`elemento ${elemento} add`);
            }
            console.log(`seleccion ${elementosSeleccionables.length}`);
        });
    });
}

//funcion para abrir y cerrar la modal-form
function abrirModalForm() {
    console.log('La función abrirModalForm se está llamando correctamente.'); // Agregado para verificar que la función se llame correctamente.

    let comprarProducto = document.getElementById('btnComprar'); //boton que abre la modal-form, boton comprar que está en modalGeneral

    let cerrarModalForm = document.querySelector('#closeModalForm') //boton cerrarForm de productos

    comprarProducto.addEventListener('click', () => {
        modalFormProductos.style.display = 'block'; // muestra la modal (modalFormProductos es el ID que esta en el html de la modal del formulario)
        console.log('evento muestra el form')
    })

    cerrarModalForm.addEventListener('click', ()=>{
        modalFormProductos.style.display = 'none'; //oculta la modal al hacer clic en el boton cerrar
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