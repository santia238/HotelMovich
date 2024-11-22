document.getElementById('form-desayuno').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío normal del formulario
    
    const formData = new FormData(this); // Crea un objeto con los datos del formulario
    
    fetch('enviar_correo.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert('Formulario enviado con éxito');
        this.reset(); // Limpiar el formulario
    })
    .catch(error => {
        alert('Error al enviar el formulario');
        console.error('Error:', error);
    });
});
