function enviarCorreo() {
    // Obtener la información del formulario
    const nombre = document.getElementbyId('nombreCompleto').value;
    const correo = document.getElementbyId('correo').value;
    const mensaje = document.getElementbyId('mensaje').value;

    // Construccion del link mailto
    const mailtoLink = 'mailto:jlorenzosa@gmail.com?subject=Contacto%20de%20${nombre}&body=Nombre: ${nombre}&0AEmail: ${correo}%0AMensaje: ${mensaje}';

    // Redirigir usuario al link mailto
    window.open(mailtoLink);
}
