document.addEventListener('DOMContentLoaded', () => {
    // Elementos del DOM
    const profileImg = document.getElementById('profileImg');  // imagen de perfil
    const configMenu = document.getElementById('configMenu');  // menú de configuración
    const logo = document.getElementById('containerLogo');

    //Inicio de sesión usando los datos del localStorage
    let isLoggedIn = true;
    let login = localStorage.getItem('log');

    function loginComproved() {
        if (login == null) {
            isLoggedIn = false;
        } else if (login == "ok") {
            isLoggedIn = true;
        } else {
            isLoggedIn = false;
        }
    }
    loginComproved();

    // Evento para mostrar menú de configuración
    profileImg.addEventListener('click', () => {
        event.stopPropagation();    // Evitar que el evento se propague
        if (configMenu.style.display === 'block') {   // Si el menú está visible, se oculta
            configMenu.style.display = 'none';
        } else {    // Si el menú está oculto, se muestra
            configMenu.style.display = 'block';
        }
    });

    // Evento para cerrar el menú de configuración haciendo clic afuera
    document.addEventListener('click', (e) => {
        if (e.target !== profileImg && e.target !== configMenu) {
            configMenu.style.display = 'none';
        }
    });

    if (isLoggedIn) {   // Opciones para usuarios con sesión iniciada
        logo.innerHTML = `
            <a class="navbar-brand" href="./dashBoard.html">
                <img src="/assets/images/logoBlanco.png" alt="logo" class="logo">
            </a>
            `;
        profileImg.innerHTML = `
            <img src="../assets/images/perfil.jpg" alt="" class="border border-dark perfil" id="profile-img">
            <span class="position-absolute bottom-0 start-0 p-2 bg-success border border-dark rounded-circle"></span>
            `;
        configMenu.innerHTML = `
            <ul>
                <li id="profile" style="cursor: pointer;">
                    <div class="row d-flex justify-content-between">
                        <div class="col-2">
                            <img src="../assets/images/perfil.jpg" alt="">
                        </div>
                        <div class="col-10">
                            <span>Perfil</span>
                        </div>
                    </div>
                </li>
                
                <li id="aboutUs" style="cursor: pointer;">
                    <div class="row d-flex justify-content-between">
                        <div class="col-2">
                            <img src="../assets/images/aboutUs.svg" alt="">
                        </div>
                        <div class="col-10">
                            <span>Acerca de nosotros</span>
                        </div>
                    </div>
                </li>
                <li id="termsConds" style="cursor: pointer;">
                    <div class="row d-flex justify-content-between">
                        <div class="col-2">
                            <img src="../assets/images/terminos.svg" alt="">
                        </div>
                        <div class="col-10">
                            <span>Términos y condiciones</span>
                        </div>
                    </div>
                </li>
                <li id="contactUs" style="cursor: pointer;">
                    <div class="row d-flex justify-content-between">
                        <div class="col-2">
                            <img src="../assets/images/contactanos.svg" alt="">
                        </div>
                        <div class="col-10">
                            <span>Contáctanos</span>
                        </div>
                    </div>
                </li>
                <li id="chat" style="cursor: pointer;">
                    <div class="row d-flex justify-content-between">
                        <div class="col-2">
                            <img src="../assets/images/comentario-sonrisa (1).svg" alt="">
                        </div>
                        <div class="col-10">
                            <span>LinkGameIn Chat</span>
                        </div>
                    </div>
                </li>
                <li id="logout" style="cursor: pointer;">
                    <div class="row d-flex justify-content-between">
                        <div class="col-2">
                            <img src="../assets/images/cerrarsesion.svg" alt="">
                        </div>
                        <div class="col-10">
                            <span>Cerrar sesión</span>
                        </div>
                    </div>
                </li>
            </ul>
            `;
            const profile = document.getElementById('profile');
            profile.addEventListener('click', function (event) {
                window.location.href = "/pages/profile.html";
            });
            const aboutUs = document.getElementById('aboutUs');
            aboutUs.addEventListener('click', function (event) {
                window.location.href = "/pages/AboutUs.html";
            });
            const termsConds = document.getElementById('termsConds');
            termsConds.addEventListener('click', function (event) {
                window.location.href = "/pages/Terminosycondiciones.html";
            });
            const contactUs = document.getElementById('contactUs');
            contactUs.addEventListener('click', function (event) {
                window.location.href = "/pages/contactanos.html";
            });
            const chat = document.getElementById('chat');
            chat.addEventListener('click', function (event) {
                window.location.href = "/chat/index.php";
            });
            const logout = document.getElementById('logout');
            logout.addEventListener('click', function (event) {
                event.preventDefault();
                window.location.href = "/pages/login.html";
                localStorage.removeItem('log');
                loginComproved();
            });
            
    } else { // Opciones para usuarios sin sesión iniciada
        logo.innerHTML = `
            <a class="navbar-brand" href="/index.html">
            <img src="/assets/images/logoBlanco.png" alt="logo" class="logo">
            </a>
            `;
        profileImg.innerHTML = `
            <img src="/assets/images/loginBlanco.png" alt="" class="perfil" id="profile-img">
            `;
        configMenu.innerHTML = `
            <ul>
                <li id="aboutUs" style="cursor: pointer;">
                    <div class="row d-flex justify-content-between">
                        <div class="col-2">
                            <img src="../assets/images/aboutUs.svg" alt="">
                        </div>
                    <div class="col-10">
                        <span>Acerca de nosotros</span>
                    </div>
                </li>
                <li id="termsConds" style="cursor: pointer;">
                    <div class="row d-flex justify-content-between">
                        <div class="col-2">
                            <img src="../assets/images/terminos.svg" alt="">
                        </div>
                        <div class="col-10">
                            <span>Términos y condiciones</span>
                        </div>
                    </div>
                </li>
                <li id="contactUs" style="cursor: pointer;">
                    <div class="row d-flex justify-content-between">
                        <div class="col-2">
                            <img src="../assets/images/contactanos.svg" alt="">
                        </div>
                        <div class="col-10">
                            <span>Contáctanos</span>
                        </div>
                </li>
                <li id="register" style="cursor: pointer;">
                    <div class="row d-flex justify-content-between">
                        <div class="col-2">
                            <img src="../assets/images/publicaciones.svg" alt="">
                        </div>
                        <div class="col-10">
                            <span>Registrarse</span>
                        </div>
                    </div>
                </li>
                <li id="login" style="cursor: pointer;">
                    <div class="row d-flex justify-content-between">
                        <div class="col-2">
                            <img src="../assets/images/cerrarsesion.svg" alt="">
                        </div>
                        <div class="col-10">
                            <span>Iniciar sesión</span>
                        </div>
                    </div>
                </li>
            </ul>
            `;
            const aboutUs = document.getElementById('aboutUs');
            aboutUs.addEventListener('click', function (event) {
                window.location.href = "/pages/AboutUs.html";
            });
            const termsConds = document.getElementById('termsConds');
            termsConds.addEventListener('click', function (event) {
                window.location.href = "/pages/Terminosycondiciones.html";
            });
            const contactUs = document.getElementById('contactUs');
            contactUs.addEventListener('click', function (event) {
                window.location.href = "/pages/contactanos.html";
            });
            const register = document.getElementById('register');
            register.addEventListener('click', function (event) {
                window.location.href = "/pages/registrarUsuario.html";
            });
            const login = document.getElementById('login');
            login.addEventListener('click', function (event) {
                event.preventDefault();
                window.location.href = "/pages/login.html";
            });
    }

});