function enviarCorreo() {
    // Obtener la información del formulario
    const nombre = document.getElementbyId('nombreCompleto').value;
    const correo = document.getElementbyId('correo').value;
    const mensaje = document.getElementbyId('mensaje').value;

    // Construccion del link mailto
    //const mailtoLink = 'mailto:jlorenzosa@gmail.com?subject=Contacto%20dede%20[TutorTech]&body=Nombre:%20[nombre]&0ACorreo%20electrónico:%20[correo]%0AMensaje:%20$[mensaje]';
    const mailtoLink =  "mailto:jlorenzosa@gmail.com";
    // Redirigir usuario al link mailto
    window.open(mailtoLink);
}
