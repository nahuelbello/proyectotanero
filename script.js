// La única misión de este script es detectar el scroll y añadir una clase al header.
// Toda la animación es controlada por CSS.

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) { // Si el scroll es mayor a 50px
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});