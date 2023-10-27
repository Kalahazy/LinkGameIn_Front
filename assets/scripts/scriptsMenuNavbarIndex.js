document.addEventListener('DOMContentLoaded', () => {

    const aboutUs = document.getElementById('aboutUs');
    aboutUs.addEventListener('click', function () {
        window.location.href = "./pages/AboutUs.html";
    });
    const termsConds = document.getElementById('termsConds');
    termsConds.addEventListener('click', function () {
        window.location.href = "./pages/Terminosycondiciones.html";
    });
    const contactUs = document.getElementById('contactUs');
    contactUs.addEventListener('click', function () {
        window.location.href = "./pages/contactanos.html";
    });
    const register = document.getElementById('register');
    register.addEventListener('click', function () {
        window.location.href = "./pages/registrarUsuario.html";
    });
    const login = document.getElementById('login');
    login.addEventListener('click', function () {
        event.preventDefault();
        window.location.href = "./pages/login.html";
    });

});
