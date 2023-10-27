document.addEventListener("DOMContentLoaded", function () {
    const selectProfilePicture = document.getElementById("input-profile-picture");
    const inputGameCategory = document.getElementById("input-game-category");
    const inputPlayerType = document.getElementById("input-player-type");
    const formRegister = document.getElementById("form-register2");
    const selectBackPicture = document.getElementById("input-background-image");

    const imagePreview = document.getElementById("image-preview");

    // Validaciones del formulario
    formRegister.addEventListener("submit", function (e) {
        e.preventDefault();

        
        if (selectProfilePicture.value === "") {
            alert("Selecciona un avatar de perfil.");
            return;
        }

        if (selectBackPicture.value === "") {
            alert("Selecciona un fondo para tu perfil.");
            return;
        }


        if (inputGameCategory.value === "") {
            alert("Selecciona una categoría de juegos.");
            return;
        }

        
        if (inputPlayerType.value === "") {
            alert("Selecciona tu tipo de jugador.");
            return;
        }

        
        const registrationData = {
            profilePicture: selectProfilePicture.value,
            backPicture: selectBackPicture.value,
            gameCategory: inputGameCategory.value,
            playerType: inputPlayerType.value,
        };

        
        localStorage.setItem("registrationData", JSON.stringify(registrationData));

        
        alert("Registro exitoso. Bienvenido a LinkGameIn");

        
        window.location.href = "/pages/dashBoard.html";
    });

    selectProfilePicture.addEventListener("change", function () {
        const selectedImage = selectProfilePicture.value;
        imagePreview.src = selectedImage;
    });

    // Mostrar una vista previa de la imagen predeterminada al cargar la página
    const defaultImage = "../assets/images/modo-retrato.svg"; 
    imagePreview.src = defaultImage;
});
