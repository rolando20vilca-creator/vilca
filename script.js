
// Efecto de aparición de las secciones
document.addEventListener("DOMContentLoaded", () => {

    const elementos = document.querySelectorAll(
        ".section, .tech-card, .timeline-item"
    );

    const observer = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("visible");
                observer.unobserve(entrada.target);
            }
        });
    }, {
        threshold: 0.12
    });

    elementos.forEach((elemento) => {
        observer.observe(elemento);
    });

});
