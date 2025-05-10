function animarYRedirigir(respuesta) {
    const boton = respuesta === 'si' ? document.getElementById('btn-si') : document.getElementById('btn-no');
    const mensaje = document.getElementById('mensaje');
    const overlay = document.getElementById('overlay');

    boton.classList.add('animar');

    mensaje.textContent = 'redirecting...';
    mensaje.style.opacity = 1;
    overlay.style.opacity = 1;

    setTimeout(() => {
        if (respuesta === 'si') {
            window.location.href = 'https://ottov5.github.io';
        } else {
            window.location.href = 'https://www.ejemplo.com/no';
        }
    }, 1200);
}
