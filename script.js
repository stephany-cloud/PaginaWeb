/* ==================================
   FUNCIÓN: MENSAJE DE BIENVENIDA
================================== */

function mostrarMensaje() {

    alert("¡Bienvenido a esta página web!");

}


/* ==================================
   FUNCIÓN: SERVICIOS
================================== */

function mostrarServicio(servicio) {

    alert(
        "Seleccionaste: " + servicio
    );

}





/* ==================================
   GALERÍA
================================== */

function ampliarImagen(imagen) {

    if (
        imagen.style.transform ===
        "scale(1.5)"
    ) {

        imagen.style.transform =
            "scale(1)";

    } else {

        imagen.style.transform =
            "scale(1.5)";

    }

}


