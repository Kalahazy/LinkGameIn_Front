// Selección de los botones de control del carrusel
const prevButton = document.querySelector('.carousel-control-prev');
const nextButton = document.querySelector('.carousel-control-next');

// Selección del elemento del carrusel
const carousel = document.querySelector('.carousel-inner');

// Inicialización de la posición actual y ancho de las tarjetas
let currentPosition = 0;
const cardWidth = document.querySelector('.carousel-item').offsetWidth;

// Manejo del evento de clic en el botón "Siguiente"




// Obtener referencia a los botones
const loginButton = document.getElementById('login-button');
const registerButton = document.getElementById('register-button');

// Agregar un evento de clic al botón de inicio de sesión
loginButton.addEventListener('click', function() {
    // Redirigir a la página de inicio de sesión
    window.location.href = './pages/login.html';
});

// Agregar un evento de clic al botón de registro
registerButton.addEventListener('click', function() {
    // Redirigir a la página de registro
    window.location.href = './pages/registrarUsuario.html';
});
