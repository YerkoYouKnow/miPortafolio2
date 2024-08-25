// Función para capitalizar la primera letra de cada palabra
function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

// Añade un event listener al campo de nombre para capitalizar las palabras
document.getElementById('name').addEventListener('input', function() {
    this.value = capitalizeWords(this.value);
});

// Manejo del envío del formulario
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }

    alert(`¡${name}!\n¡Gracias por contactarme!\nTe responderé a la brevedad.`);
    document.getElementById('contactForm').reset();
});

// Cambiar color de las habilidades al hacer clic
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('click', () => {
        item.style.backgroundColor = getRandomColor();
    });
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}