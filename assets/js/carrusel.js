document.querySelectorAll('[data-carrusel]').forEach(carrusel => {
    const slides = carrusel.querySelectorAll('.carrusel-slide');
    let current = 0;

    function mostrar(index) {
        slides.forEach(s => s.classList.remove('active'));
        slides[index].classList.add('active');
    }

    carrusel.querySelector('.carrusel-prev').addEventListener('click', () => {
        current = (current - 1 + slides.length) % slides.length;
        mostrar(current);
    });

    carrusel.querySelector('.carrusel-next').addEventListener('click', () => {
        current = (current + 1) % slides.length;
        mostrar(current);
    });
});
