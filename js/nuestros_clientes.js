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

resetearFormulario('formFooterClient');
resetearFormulario('formFooterMapClient');
