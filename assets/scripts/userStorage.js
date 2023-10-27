/*
document.getElementById('button-register').addEventListener('click', saveUsers);
    
let linkGamers = [];

    function saveUsers() {
        // Obtener los valores del formulario
        let name = document.getElementById('input-name').value;
        let lastName = document.getElementById('input-last-name').value;
        let nickName = document.getElementById('input-nickname').value;
        let email = document.getElementById('input-email').value;
        let password = document.getElementById('input-password').value;
        let confirmPwrd = document.getElementById('input-password-confirm').value;
        let legalAge = document.getElementById('check-legal-age').checked;

        //Para evitar que se guarden arrays con campos vacíos
        if (name.trim() === '' || lastName.trim() === '' || nickName.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPwrd.trim() === '' || !legalAge) {
            return;
        }

        if (password !== confirmPwrd) {
            alert("Las contraseñas no coinciden");
            return;
        }

        //Objeto JSON
        let userData = {
            nombre: name,
            last_name: lastName,
            nickname: nickName,
            email: email,
            password: password,
            confirm_password: confirmPwrd,
            legal_age: legalAge
        };

        linkGamers.push(userData);
        let linkGamersJSON = JSON.stringify(linkGamers);
        localStorage.setItem('linkGamers', linkGamersJSON);

    }
*/
const form_register_user = document.getElementById('form-register-user');

window.addEventListener('load', function() {
    form_register_user.reset();
});

document.getElementById('button-register').addEventListener('click', (e) => {
    e.preventDefault();

    // Obtener los valores del formulario
    const first_name = document.getElementById('input-name').value;
    const last_name = document.getElementById('input-last-name').value;
    const nickname = document.getElementById('input-nickname').value;
    const email = document.getElementById('input-email').value;
    const password = document.getElementById('input-password').value;
    const confirm_pass = document.getElementById('input-password-confirm').value;
    let legalAge = document.getElementById('check-legal-age').checked;
    let termsConditions = document.getElementById('check-terms-conditions').checked;

    //Funcion validar first_name solo letras y no sea vacio
    const validarNombre = (first_name) => {
        // if (first_name.trim() === "") {
        //     return false;
        // }
        return /^[A-Za-z\s]+$/.test(first_name) ? true : false;
    }
    //Funcion validar last_name solo letras
    const validarApellido = (last_name) => {
        return /^[A-Za-z\s]+$/.test(last_name) ? true : false;
    }
    //Funcion validar nickname
    const validarNickname = (nickname) => {
        return /^[A-Za-z0-9\s\-_]+$/.test(nickname) ? true : false;
    }
    //Funcion validar email
    const validarEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? true : false;
    }
    //Funcion validar password
    const validarPassword = (password) => {
        return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,15}$/.test(password) ? true : false;
    }
    //Funcion validar password y confirm_pass sean iguales
    const validarConfirmPassword = (password, confirm_pass) => {
        return password === confirm_pass ? true : false;
    }

    //Funcion validar todos los campos
    if (validarNombre(first_name) && validarApellido(last_name) && validarNickname(nickname) && validarEmail(email) && validarPassword(password) && validarConfirmPassword(password, confirm_pass)) {
        const userDataRegister = {
            first_name: first_name,
            last_name: last_name,
            nickname: nickname,
            email: email,
            password: password,
            confirm_pass: confirm_pass
        };
        // Realiza la solicitud POST a través de la API Fetch
        // fetch API (url, method, headers, body(json), then, catch)
        const url = "http://localhost:8080/users";
        const method = "POST";
        const headers = {
            "Content-Type": "application/json"
        };
        const body = JSON.stringify(userDataRegister);
        fetch(url, {
            method: method,
            headers: headers,
            body: body
        })
            .then(response => response.text()) //Convierte la respuesta del servidor en un objeto JSON || "Si encuentra el servidor"
            .then(userDataRegister => { //Datos que se reciben del servidor || "Si te encontré, entonces te mando la información"
                console.log("Todo fine", userDataRegister); //Muestra los datos que se reciben del servidor en consola
                window.location.href = "/pages/personalizaRegistro.html";
            })
            .catch(error => {   //Error que se recibe del servidor || Por si no sucede
                console.error(error);    //Muestra el error en consola
            })

        form_register_user.reset(); //Limpia los campos del formulario
    }
    else { // Código si alguna de las validaciones falla
        if ( !validarNombre(first_name) ) {
            const nameField = document.getElementById('input-name');
            const existingAlert = nameField.parentElement.querySelector(".alert.alert-danger");
            if (existingAlert) {
                existingAlert.remove();
            }
        
            nameField.parentElement.insertAdjacentHTML(
                "beforeend",
                `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                    Nombre no válido
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`
            )
        } else if ( !validarApellido(last_name) ) {
            const lastNameField = document.getElementById('input-last-name');
            const existingAlert = lastNameField.parentElement.querySelector(".alert.alert-danger");
            if (existingAlert) {
                existingAlert.remove();
            }
            lastNameField.parentElement.insertAdjacentHTML(
                "beforeend",
                `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                    Apellido no válido
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`
            )
            
        } else if ( !validarNickname(nickname) ) {
            const nicknameField = document.getElementById('input-nickname');
            const existingAlert = nicknameField.parentElement.querySelector(".alert.alert-danger");
            if (existingAlert) {
                existingAlert.remove();
            }
            nicknameField.parentElement.insertAdjacentHTML(
                "beforeend",
                `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                    Nickname no válido
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`
            )
        } else if ( !validarEmail(email) ) {
            const emailField = document.getElementById('input-email');
            const existingAlert = emailField.parentElement.querySelector(".alert.alert-danger");
            if (existingAlert) {
                existingAlert.remove();
            }
            emailField.parentElement.insertAdjacentHTML(
                "beforeend",
                `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                    Email no válido
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`
            )
        } else if (!validarPassword(password)) {
            const passField = document.getElementById('input-password');
            const existingAlert = passField.parentElement.querySelector(".alert.alert-danger");
            if (existingAlert) {
                existingAlert.remove();
            }
            passField.parentElement.insertAdjacentHTML(
                "beforeend",
                `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                    Contraseña no válida
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`
            )
        } else if (!validarConfirmPassword(password, confirm_pass)){
            const confPassField = document.getElementById('input-password-confirm');
            const existingAlert = confPassField.parentElement.querySelector(".alert.alert-danger");
            if (existingAlert) {
                existingAlert.remove();
            }
            confPassField.parentElement.insertAdjacentHTML(
                "beforeend",
                `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                    La contraseña no coincide
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`
            )
        } else {
            const randomField = document.getElementById('btn-register');
            const existingAlert = randomField.parentElement.querySelector(".alert.alert-danger");
            if (existingAlert) {
                existingAlert.remove();
            }
            randomField.parentElement.insertAdjacentHTML(
                "afterbegin",
                `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                    Asegúrate de llenar todos los campos
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`
            )
        }
    }

});
