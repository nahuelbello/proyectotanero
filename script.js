// --- PROTOCOLO DE ANIMACIÓN DE ALTO RENDIMIENTO ---

// 1. Identificamos todos los elementos que vamos a animar.
const header = document.querySelector('header');
const logo = document.querySelector('.logo-central img');
const socialIcons = document.querySelector('.social-icons');
const mainNav = document.querySelector('.main-nav');

// 2. Definimos los parámetros de la animación.
const startScroll = 0;      // Punto de inicio de la animación (scroll en 0)
const endScroll = 150;      // Punto final de la animación (a los 150px de scroll)

const startLogoHeight = 150; // Tamaño inicial del logo en px
const endLogoHeight = 60;   // Tamaño final del logo en px

const startHeaderPadding = 1.5; // Padding inicial del header en rem
const endHeaderPadding = 0.5;   // Padding final del header en rem

// 3. La función principal que se ejecuta en cada frame.
function animateHeader() {
    // Calculamos el scroll actual.
    let scrollY = window.scrollY;

    // Calculamos el progreso de la animación (un número de 0.0 a 1.0).
    let progress = (scrollY - startScroll) / (endScroll - startScroll);
    
    // Nos aseguramos de que el progreso nunca sea menor que 0 o mayor que 1.
    progress = Math.max(0, Math.min(1, progress));

    // 4. Calculamos los nuevos valores para cada propiedad en el frame actual.
    // Esto se llama interpolación lineal.
    const currentLogoHeight = startLogoHeight + (endLogoHeight - startLogoHeight) * progress;
    const currentHeaderPadding = startHeaderPadding + (endHeaderPadding - startHeaderPadding) * progress;

    // 5. Aplicamos los nuevos estilos directamente a los elementos.
    header.style.padding = `${currentHeaderPadding}rem 5%`;
    logo.style.height = `${currentLogoHeight}px`;
    
    // Le pedimos al navegador que vuelva a ejecutar esta función en el próximo frame.
    // Esto es mucho más eficiente que un listener de scroll normal.
    requestAnimationFrame(animateHeader);
}

// 6. Iniciamos el bucle de animación.
requestAnimationFrame(animateHeader);


