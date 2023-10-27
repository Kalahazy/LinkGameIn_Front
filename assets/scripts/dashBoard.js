let contador = 1;
const textarea = document.getElementById('post-text');
const botonGuardar = document.getElementById('post-button');
const contenedorTarjetas = document.getElementById('contenedorDePublicaciones');

// Recupera las publicaciones guardadas desde el localStorage (si existen)
function cargarPublicacionesGuardadas() {
    const publicaciones = [];
    for (let i = 0; i < localStorage.length; i++) {
        const clave = localStorage.key(i);

        if (clave.startsWith('publicacion')) {
            const publicacionJSON = localStorage.getItem(clave);
            const publicacion = JSON.parse(publicacionJSON);
            publicaciones.push({ clave, ...publicacion });
        }
    }

    // Mostrar hasta 10 publicaciones en el nuevo orden
    for (let i = 0; i < Math.min(10, publicaciones.length); i++) {
        mostrarPublicacion(publicaciones[i]);
    }
}

// Cargar publicaciones guardadas al cargar la página
cargarPublicacionesGuardadas();

// Agregar un evento de clic al botón para guardar el contenido en el localStorage y mostrarlo en una tarjeta
botonGuardar.addEventListener('click', function() {
    const contenido = textarea.value;

    const publicacion = {
        contenido: contenido,
        fecha: new Date().toLocaleString(),
    };

    const claveUnica = 'publicacion' + contador;
    contador++;

    const publicacionJSON = JSON.stringify(publicacion);
    localStorage.setItem(claveUnica, publicacionJSON);

    mostrarPublicacion({ clave: claveUnica, ...publicacion });
    textarea.value = ''; // Limpia el textarea después de guardar la publicación
});

// Función para mostrar una publicación en una tarjeta
function mostrarPublicacion(publicacion) {
    const nuevaTarjeta = document.createElement('div');
    nuevaTarjeta.classList.add('tarjeta');
    nuevaTarjeta.innerHTML = `
        <p>${publicacion.contenido}</p>
        <p>${publicacion.fecha}</p>
        <button class="eliminar" data-clave="${publicacion.clave}">Eliminar</button>
    `;

    contenedorTarjetas.appendChild(nuevaTarjeta);

    // Agregar un evento de clic al botón "Eliminar"
    const botonEliminar = nuevaTarjeta.querySelector('.eliminar');
    botonEliminar.addEventListener('click', function() {
        eliminarPublicacion(publicacion.clave);
        contenedorTarjetas.removeChild(nuevaTarjeta);
    });
}

// Función para eliminar una publicación del localStorage
function eliminarPublicacion(clave) {
    localStorage.removeItem(clave);
}

const publicacionesDash = [
    {let nickname: 'NoSoyTimbers', }
]

window.addEventListener('load', function() {
    // Limpia el contenido del modal
    postText.value = '';
    imageInput.value = '';
    imagePreview.src = '';

    // Luego, cierra el modal
    modal.style.display = 'none';
    overlay.style.display = 'none'; // Oculta el overlay

    // Restablecer el desplazamiento de la página
    document.body.style.overflow = 'auto';

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
    
        // Comprobar si la clave comienza con 'publicacion'
        if (key.startsWith('publicacionDash')) {
            const publicacion = JSON.parse(localStorage.getItem(key));
    
            // Crea elementos HTML dinámicamente y muestra las publicaciones
            const containerPubli = document.createElement('div');
            containerPubli.className = 'containerPubli';
                const contPersonalInfoPubli = document.createElement('div');
                contPersonalInfoPubli.className = 'contPersonalInfoPubli';
                    const imgPerfilPubli = document.createElement('img');
                    imgPerfilPubli.className = 'imgPerfilPubli';
                    imgPerfilPubli.src = '../assets/images/perfil.jpg';
                    const nicknamePrestige = document.createElement('div');
                    nicknamePrestige.className = 'nicknamePrestige';
                        const nicknamePubli = document.createElement('span');
                        nicknamePubli.className = 'nicknamePubli';
                        nicknamePubli.textContent = 'Kalahazy';
                        const prestigePubli = document.createElement('p');
                        prestigePubli.className = 'prestigePubli';
                        prestigePubli.textContent = 'Warzone ProPlayer';
                    const deletePubli = document.createElement('img');
                    deletePubli.className = 'deletePubli';
                    deletePubli.src = '../assets/images/delete.png';
                    deletePubli.addEventListener('click', function () {
                        localStorage.removeItem(key);
                        location.reload();
                    });
                const contTextPubli = document.createElement('div');
                contTextPubli.className = 'contTextPubli';
                    const textPubli = document.createElement('h3');
                    textPubli.className = 'textPubli';
                    textPubli.textContent = publicacion.contenido;
                const contImgPubli = document.createElement('div');
                contImgPubli.className = 'contImgPubli';
                    const imgPubli = document.createElement('img');
                    imgPubli.className = 'imgPubli';
                    imgPubli.src = publicacion.imagen;
                const datePubli = document.createElement('p');
                datePubli.className = 'datePubli';
                datePubli.textContent = publicacion.fecha.split(', ')[0] + ' a las ' + publicacion.fecha.split(', ')[1];
                const contReactions = document.createElement('div');
                contReactions.className = 'contReactions';
                    const like = document.createElement('img');
                    like.className = 'like';
                    like.src = '../assets/images/like.png';
                    const comment = document.createElement('img');
                    comment.className = 'comment';
                    comment.src = '../assets/images/comment.png';
                    const share = document.createElement('img');
                    share.className = 'share';
                    share.src = '../assets/images/share.svg';
            
                    // Agrega los elementos de nicknamePrestige
                    nicknamePrestige.appendChild(nicknamePubli);
                    nicknamePrestige.appendChild(prestigePubli);
                // Agrega los elementos de contPersonalInfoPubli
                contPersonalInfoPubli.appendChild(imgPerfilPubli);
                contPersonalInfoPubli.appendChild(nicknamePrestige);
                contPersonalInfoPubli.appendChild(deletePubli);
                // Agrega los elementos de contTextPubli
                contTextPubli.appendChild(textPubli);
                // Agrega los elementos de contImgPubli
                contImgPubli.appendChild(imgPubli);
                    // Agrega los elementos de contReactions
                    contReactions.appendChild(like);
                    contReactions.appendChild(comment);
                    contReactions.appendChild(share);
            // Agrega los elementos de containerPubli
            containerPubli.appendChild(contPersonalInfoPubli);
            containerPubli.appendChild(contTextPubli);
            if (publicacion.imagen) {
                containerPubli.appendChild(contImgPubli);
            }
            containerPubli.appendChild(datePubli);
            containerPubli.appendChild(contReactions);        
    
            // Agrega el contenedor de la publicación a tu página
            const publicationsContainer = document.querySelector('.publications');
            publicationsContainer.appendChild(containerPubli);
        }
    }
});