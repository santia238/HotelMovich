// document.querySelectorAll('form').forEach(form => {
//     form.addEventListener('submit', function(event) {
//         event.preventDefault();
//         const formData = new FormData(this);
//         fetch(this.action, { method: 'POST', body: formData })
//             .then(response => response.text())
//             .then(() => {
//                 alert('Formulario enviado con éxito');
//                 this.reset();
//             })
//             .catch(error => console.error('Error:', error));
//     });
// });


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

document.addEventListener("DOMContentLoaded", function () {
    const fieldsetsEbano = document.querySelectorAll('#form-ebano-cena fieldset');
    const progressBarEbano = document.getElementById('progress-bar-ebano');
    const nextButtonEbano = document.getElementById('next-button-ebano');
    const prevButtonEbano = document.getElementById('prev-button-ebano');
    const submitButtonEbano = document.getElementById('submit-button-ebano');
    let currentStepEbano = 0;

    // Mostrar el primer fieldset
    fieldsetsEbano[currentStepEbano].classList.add('active');

    // Actualizar barra de progreso
    function updateProgressBarEbano() {
        const progress = ((currentStepEbano + 1) / fieldsetsEbano.length) * 100;
        progressBarEbano.style.width = `${progress}%`;
    }

    // Botón "Siguiente"
    nextButtonEbano.addEventListener('click', () => {
        fieldsetsEbano[currentStepEbano].classList.remove('active');
        currentStepEbano++;
        fieldsetsEbano[currentStepEbano].classList.add('active');
        updateButtonsEbano();
        updateProgressBarEbano();
    });

    // Botón "Anterior"
    prevButtonEbano.addEventListener('click', () => {
        fieldsetsEbano[currentStepEbano].classList.remove('active');
        currentStepEbano--;
        fieldsetsEbano[currentStepEbano].classList.add('active');
        updateButtonsEbano();
        updateProgressBarEbano();
    });

    // Actualizar botones
    function updateButtonsEbano() {
        prevButtonEbano.classList.toggle('hidden', currentStepEbano === 0);
        nextButtonEbano.classList.toggle('hidden', currentStepEbano === fieldsetsEbano.length - 1);
        submitButtonEbano.classList.toggle('hidden', currentStepEbano !== fieldsetsEbano.length - 1);
    }

    // Inicializar barra de progreso
    updateProgressBarEbano();
});


document.addEventListener("DOMContentLoaded", function () {
    const fieldsetsAlmuerzo = document.querySelectorAll('#form-ebano-almuerzo fieldset');
    const progressBarAlmuerzo = document.getElementById('progress-bar-ebano-almuerzo');
    const nextButtonAlmuerzo = document.getElementById('next-button-ebano-almuerzo');
    const prevButtonAlmuerzo = document.getElementById('prev-button-ebano-almuerzo');
    const submitButtonAlmuerzo = document.getElementById('submit-button-ebano-almuerzo');
    let currentStepAlmuerzo = 0;

    // Mostrar el primer fieldset
    fieldsetsAlmuerzo[currentStepAlmuerzo].classList.add('active');

    // Actualizar barra de progreso
    function updateProgressBarAlmuerzo() {
        const progress = ((currentStepAlmuerzo + 1) / fieldsetsAlmuerzo.length) * 100;
        progressBarAlmuerzo.style.width = `${progress}%`;
    }

    // Botón "Siguiente"
    nextButtonAlmuerzo.addEventListener('click', () => {
        fieldsetsAlmuerzo[currentStepAlmuerzo].classList.remove('active');
        currentStepAlmuerzo++;
        fieldsetsAlmuerzo[currentStepAlmuerzo].classList.add('active');
        updateButtonsAlmuerzo();
        updateProgressBarAlmuerzo();
    });

    // Botón "Anterior"
    prevButtonAlmuerzo.addEventListener('click', () => {
        fieldsetsAlmuerzo[currentStepAlmuerzo].classList.remove('active');
        currentStepAlmuerzo--;
        fieldsetsAlmuerzo[currentStepAlmuerzo].classList.add('active');
        updateButtonsAlmuerzo();
        updateProgressBarAlmuerzo();
    });

    // Actualizar botones
    function updateButtonsAlmuerzo() {
        prevButtonAlmuerzo.classList.toggle('hidden', currentStepAlmuerzo === 0);
        nextButtonAlmuerzo.classList.toggle('hidden', currentStepAlmuerzo === fieldsetsAlmuerzo.length - 1);
        submitButtonAlmuerzo.classList.toggle('hidden', currentStepAlmuerzo !== fieldsetsAlmuerzo.length - 1);
    }

    // Inicializar barra de progreso
    updateProgressBarAlmuerzo();
});


document.addEventListener("DOMContentLoaded", function () {
    const fieldsetsSamanCafe = document.querySelectorAll('#form-saman-cafe-am fieldset');
    const progressBarSamanCafe = document.getElementById('progress-bar-saman-cafe-am');
    const nextButtonSamanCafe = document.getElementById('next-button-saman-cafe-am');
    const prevButtonSamanCafe = document.getElementById('prev-button-saman-cafe-am');
    const submitButtonSamanCafe = document.getElementById('submit-button-saman-cafe-am');
    let currentStepSamanCafe = 0;

    // Mostrar el primer fieldset
    fieldsetsSamanCafe[currentStepSamanCafe].classList.add('active');

    // Actualizar barra de progreso
    function updateProgressBarSamanCafe() {
        const progress = ((currentStepSamanCafe + 1) / fieldsetsSamanCafe.length) * 100;
        progressBarSamanCafe.style.width = `${progress}%`;
    }

    // Botón "Siguiente"
    nextButtonSamanCafe.addEventListener('click', () => {
        fieldsetsSamanCafe[currentStepSamanCafe].classList.remove('active');
        currentStepSamanCafe++;
        fieldsetsSamanCafe[currentStepSamanCafe].classList.add('active');
        updateButtonsSamanCafe();
        updateProgressBarSamanCafe();
    });

    // Botón "Anterior"
    prevButtonSamanCafe.addEventListener('click', () => {
        fieldsetsSamanCafe[currentStepSamanCafe].classList.remove('active');
        currentStepSamanCafe--;
        fieldsetsSamanCafe[currentStepSamanCafe].classList.add('active');
        updateButtonsSamanCafe();
        updateProgressBarSamanCafe();
    });

    // Actualizar botones
    function updateButtonsSamanCafe() {
        prevButtonSamanCafe.classList.toggle('hidden', currentStepSamanCafe === 0);
        nextButtonSamanCafe.classList.toggle('hidden', currentStepSamanCafe === fieldsetsSamanCafe.length - 1);
        submitButtonSamanCafe.classList.toggle('hidden', currentStepSamanCafe !== fieldsetsSamanCafe.length - 1);
    }

    // Inicializar barra de progreso
    updateProgressBarSamanCafe();
});

document.addEventListener("DOMContentLoaded", function () {
    const fieldsetsTipsyBar = document.querySelectorAll('#form-tipsy-bird-bar fieldset');
    const progressBarTipsyBar = document.getElementById('progress-bar-tipsy-bird-bar');
    const nextButtonTipsyBar = document.getElementById('next-button-tipsy-bird-bar');
    const prevButtonTipsyBar = document.getElementById('prev-button-tipsy-bird-bar');
    const submitButtonTipsyBar = document.getElementById('submit-button-tipsy-bird-bar');
    let currentStepTipsyBar = 0;

    // Mostrar el primer fieldset
    fieldsetsTipsyBar[currentStepTipsyBar].classList.add('active');

    // Actualizar barra de progreso
    function updateProgressBarTipsyBar() {
        const progress = ((currentStepTipsyBar + 1) / fieldsetsTipsyBar.length) * 100;
        progressBarTipsyBar.style.width = `${progress}%`;
    }

    // Botón "Siguiente"
    nextButtonTipsyBar.addEventListener('click', () => {
        fieldsetsTipsyBar[currentStepTipsyBar].classList.remove('active');
        currentStepTipsyBar++;
        fieldsetsTipsyBar[currentStepTipsyBar].classList.add('active');
        updateButtonsTipsyBar();
        updateProgressBarTipsyBar();
    });

    // Botón "Anterior"
    prevButtonTipsyBar.addEventListener('click', () => {
        fieldsetsTipsyBar[currentStepTipsyBar].classList.remove('active');
        currentStepTipsyBar--;
        fieldsetsTipsyBar[currentStepTipsyBar].classList.add('active');
        updateButtonsTipsyBar();
        updateProgressBarTipsyBar();
    });

    // Actualizar botones
    function updateButtonsTipsyBar() {
        prevButtonTipsyBar.classList.toggle('hidden', currentStepTipsyBar === 0);
        nextButtonTipsyBar.classList.toggle('hidden', currentStepTipsyBar === fieldsetsTipsyBar.length - 1);
        submitButtonTipsyBar.classList.toggle('hidden', currentStepTipsyBar !== fieldsetsTipsyBar.length - 1);
    }

    // Inicializar barra de progreso
    updateProgressBarTipsyBar();
});

document.addEventListener("DOMContentLoaded", function () {
    const fieldsetsRoomService = document.querySelectorAll('#form-roomservice fieldset');
    const progressBarRoomService = document.getElementById('progress-bar-roomservice');
    const nextButtonRoomService = document.getElementById('next-button-roomservice');
    const prevButtonRoomService = document.getElementById('prev-button-roomservice');
    const submitButtonRoomService = document.getElementById('submit-button-roomservice');
    let currentStepRoomService = 0;

    // Mostrar el primer fieldset
    fieldsetsRoomService[currentStepRoomService].classList.add('active');

    // Actualizar barra de progreso
    function updateProgressBarRoomService() {
        const progress = ((currentStepRoomService + 1) / fieldsetsRoomService.length) * 100;
        progressBarRoomService.style.width = `${progress}%`;
    }

    // Botón "Siguiente"
    nextButtonRoomService.addEventListener('click', () => {
        fieldsetsRoomService[currentStepRoomService].classList.remove('active');
        currentStepRoomService++;
        fieldsetsRoomService[currentStepRoomService].classList.add('active');
        updateButtonsRoomService();
        updateProgressBarRoomService();
    });

    // Botón "Anterior"
    prevButtonRoomService.addEventListener('click', () => {
        fieldsetsRoomService[currentStepRoomService].classList.remove('active');
        currentStepRoomService--;
        fieldsetsRoomService[currentStepRoomService].classList.add('active');
        updateButtonsRoomService();
        updateProgressBarRoomService();
    });

    // Actualizar botones
    function updateButtonsRoomService() {
        prevButtonRoomService.classList.toggle('hidden', currentStepRoomService === 0);
        nextButtonRoomService.classList.toggle('hidden', currentStepRoomService === fieldsetsRoomService.length - 1);
        submitButtonRoomService.classList.toggle('hidden', currentStepRoomService !== fieldsetsRoomService.length - 1);
    }

    // Inicializar barra de progreso
    updateProgressBarRoomService();
});
 





