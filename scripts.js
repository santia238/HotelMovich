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

document.getElementById('fecha').addEventListener('input', function() {
    const today = new Date().toISOString().split('T')[0];
    if (this.value < today) {
        alert('La fecha no puede ser anterior a hoy.');
        this.value = today;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const fieldsets = document.querySelectorAll('#form-desayuno-checklist fieldset');
    const progressBar = document.querySelector('.progress-bar');
    const nextButton = document.getElementById('next-button');
    const prevButton = document.getElementById('prev-button');
    const submitButton = document.getElementById('submit-button');
    let currentStep = 0;

    // Mostrar el primer fieldset
    fieldsets[currentStep].classList.add('active');

    // Actualizar barra de progreso
    function updateProgressBar() {
        const progress = ((currentStep + 1) / fieldsets.length) * 100;
        progressBar.style.width = `${progress}%`;
    }

    // Botón "Siguiente"
    nextButton.addEventListener('click', () => {
        if (!validateCurrentFieldset()) {
            alert('Por favor, completa todos los campos requeridos.');
            return;
        }
        fieldsets[currentStep].classList.remove('active');
        currentStep++;
        fieldsets[currentStep].classList.add('active');
        updateButtons();
        updateProgressBar();
    });

    // Botón "Anterior"
    prevButton.addEventListener('click', () => {
        fieldsets[currentStep].classList.remove('active');
        currentStep--;
        fieldsets[currentStep].classList.add('active');
        updateButtons();
        updateProgressBar();
    });

    // Actualizar botones
    function updateButtons() {
        prevButton.classList.toggle('hidden', currentStep === 0);
        nextButton.classList.toggle('hidden', currentStep === fieldsets.length - 1);
        submitButton.classList.toggle('hidden', currentStep !== fieldsets.length - 1);
    }

    // Validar campos del fieldset actual
    function validateCurrentFieldset() {
        const inputs = fieldsets[currentStep].querySelectorAll('input[required], textarea[required]');
        return Array.from(inputs).every(input => input.value.trim() !== '');
    }

    // Inicializar barra de progreso
    updateProgressBar();
});



