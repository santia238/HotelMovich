document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(this);
        fetch(this.action, { method: 'POST', body: formData })
            .then(response => response.text())
            .then(() => {
                alert('Formulario enviado con éxito');
                this.reset();
            })
            .catch(error => console.error('Error:', error));
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Obtener todos los enlaces de navegación
    const sectionLinks = document.querySelectorAll('.section-link');
    
    // Función para ocultar todas las secciones
    function hideSections() {
        const sections = document.querySelectorAll('.form-section');
        sections.forEach(section => {
            section.style.display = 'none';
        });
    }

    // Función para mostrar la sección correspondiente
    function showSection(sectionId) {
        hideSections(); // Primero ocultamos todas las secciones
        const sectionToShow = document.getElementById(sectionId);
        if (sectionToShow) {
            sectionToShow.style.display = 'block'; // Mostramos la sección seleccionada
        }
    }

    // Evento para cambiar la sección cuando se hace clic en un enlace
    sectionLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevenir el comportamiento por defecto de los enlaces
            const sectionId = link.getAttribute('data-section'); // Obtener el ID de la sección
            showSection(sectionId);
        });
    });

    // Mostrar la primera sección por defecto al cargar la página (Desayuno)
    showSection('desayuno');
});
