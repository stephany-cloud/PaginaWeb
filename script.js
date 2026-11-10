/* ==================================
   FUNCIÓN: MENSAJE DE BIENVENIDA
================================== */

function mostrarMensaje() {
    alert("¡Bienvenido a la ficha técnica y de lore de Vex!");
}


/* ==================================
   FUNCIÓN: SERVICIOS
================================== */

function mostrarServicio(servicio) {
    alert("Seleccionaste: " + servicio);
}


/* ==================================
   GALERÍA & MODAL RESPONSIVO
================================== */

function ampliarImagen(elementoImg) {
    const modal = document.getElementById("modal-imagen");
    const imgAmpliada = document.getElementById("img-ampliada");
    
    if (modal && imgAmpliada) {
        imgAmpliada.src = elementoImg.src;
        imgAmpliada.alt = elementoImg.alt;
        modal.style.display = "flex";
    }
}

function cerrarModal() {
    const modal = document.getElementById("modal-imagen");
    if (modal) {
        modal.style.display = "none";
    }
}
