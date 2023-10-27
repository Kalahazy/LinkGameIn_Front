document.addEventListener("DOMContentLoaded", function () {
    // Agregar un evento de envío de formulario
    const form = document.getElementById("post-form");
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe de manera predeterminada

        // Obtener el valor del campo de texto
        const postText = document.getElementById("post-text").value;

        // Guardar la publicación en el Local Storage
        const postData = {
            text: postText

        };
        localStorage.setItem("nuevaPublicacion", JSON.stringify(postData));

        // Limpiamos el campo de texto después de guardar
        document.getElementById("post-text").value = "";

        // Recargamos las publicaciones almacenadas en el Local Storage
        cargarPublicaciones();
    });

    // Función para cargar las publicaciones desde el Local Storage
    function cargarPublicaciones() {
        const publicacionGuardada = localStorage.getItem("nuevaPublicacion");
        if (publicacionGuardada) {
            const postData = JSON.parse(publicacionGuardada);

            const nuevaPublicacion = crearElementoPublicacion(postData);
            // Agregamos nuevaPublicacion al contenedor de publicaciones
            const contenedorPublicaciones = document.getElementById("contenedor-publicaciones");
            contenedorPublicaciones.appendChild(nuevaPublicacion);
        }
    }


}
);