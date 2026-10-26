/* ==================================
   FUNCIÓN: MENSAJE DE BIENVENIDA
================================== */

function mostrarMensaje() {

    alert("¡Bienvenido a esta página web!");

}


/* ==================================
   FUNCIÓN: SERVICIOS
================================== */

function mostrarServicio(tipo) {
   
const pantalla = document.getElementById('pantalla-detalle');
    const titulo = document.getElementById('titulo-detalle');
    const texto = document.getElementById('texto-detalle');

   pantalla.style.display = 'block';

   if (tipo === 'habilidades') {
        titulo.innerText = "Ficha Técnica y Capacidades: Sam (Operadora SAS - 24 años)";
        texto.innerHTML = `
            <p style="background-color: #242424; padding: 15px; border-left: 4px solid #007bff; border-radius: 4px; margin-bottom: 20px;">
                <strong>Resumen:</strong> Sam es una operadora de infiltración competente, con habilidades sociales y de observación excepcionales, un umbral de dolor y resistencia a toxinas documentado, y competencia básica en armas de fuego y combate cuerpo a cuerpo. No es una superhumana. Es una soldado entrenada con atributos físicos y psicológicos fuera de lo común, pero dentro de lo humanamente posible. Su mayor ventaja no es la fuerza: es la adaptación, la observación y la capacidad de sobrevivir donde otros se quiebran.
            </p><br>

            <h4 style="color: #ffffff; margin-bottom: 5px;">1. Infiltración y Movimiento Táctico</h4>
            <p>Especialidad principal: Especialista de infiltración. Movimiento silencioso capaz de evitar el oído humano en entornos con ruido moderado. Escalada táctica lenta y controlada usando puntos de apoyo mínimos. Acceso por espacios reducidos gracias a su complexión (160 cm, 50 kg). Camuflaje estático usando sombras y puntos ciegos.</p><br>

            <h4 style="color: #ffffff; margin-bottom: 5px;">2. Combate Cuerpo a Cuerpo (CQC)</h4>
            <p>Estilo adaptado a su tamaño y velocidad. Uso de cuchillo de combate a corta distancia, lanzamientos de precisión (7-10 metros), defensa personal usando el impulso del oponente, y técnicas para escapar del suelo y recuperar la distancia.</p><br>

            <h4 style="color: #ffffff; margin-bottom: 5px;">3. Manejo de Armas de Fuego</h4>
            <p>Dominio competente de pistolas (Glock 17/19) hasta 25 metros. Competencia básica y en desarrollo con rifles de asalto (L119A2). Su secundaria principal es el cuchillo táctico.</p><br>

            <h4 style="color: #ffffff; margin-bottom: 5px;">4. Reconocimiento y Observación</h4>
            <p>Lectura avanzada de lenguaje corporal y microexpresiones, memoria visual selectiva para planos y rutas, detección de patrones y rutinas, y reconocimiento encubierto civil.</p><br>

            <h4 style="color: #ffffff; margin-bottom: 5px;">5. Idiomas</h4>
            <p>Japonés (nativo), Coreano (fluido), Chino mandarín (competente/intermedio), Inglés (fluido con acento bajo estrés), Francés (básico).</p><br>

            <h4 style="color: #ffffff; margin-bottom: 5px;">6. Resistencia Física y Atributos</h4>
            <p>Umbral de dolor alto (8/10), resistencia a sedantes y toxinas (9/10), flexibilidad funcional superior, gran resistencia cardiovascular y excelente relación fuerza-peso.</p><br>

            <h4 style="color: #ffffff; margin-bottom: 5px;">7. Supervivencia</h4>
            <p>Orientación sin GPS con mapa y brújula, supervivencia en entornos hostiles, alta tolerancia a la intemperie (meditación profunda para descanso corto) y primeros auxilios básicos de campaña.</p><br>

            <h4 style="color: #ffffff; margin-bottom: 5px;">8. Inteligencia y Adaptación</h4>
            <p>Aprendizaje acelerado, pensamiento táctico bajo presión, perfecta adaptación cultural con tapabocas y lectura de intenciones o amenazas veladas.</p><br>

            <h4 style="color: #ffffff; margin-bottom: 5px;">9. Otras Habilidades Útiles</h4>
            <p>Conducción táctica básica (con tendencia a chocar fácilmente en emergencias), comunicaciones militares cifradas y conocimientos básicos en demoliciones y cargas de apertura.</p>
        `;
    } else {
        titulo.innerText = "Información";
        texto.innerHTML = "<p>Contenido en desarrollo.</p>";
    }


   pantalla.scrollIntoView({ behavior: 'smooth' });
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


