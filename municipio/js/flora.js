// Animación al hacer scroll (efecto fade-up)
document.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".fade-up");
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        if (position < windowHeight - 100) {
            el.classList.add("visible");
        }
    });
});

// Mensaje al cargar
window.addEventListener("load", () => {
    console.log("🍃 Página de flora cargada correctamente");
});
