//La validación del formulário con javascript es considerada un desafío extra, no es obligatório realizar esta validación para realizar su entrega
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.boton');
    const items = document.querySelectorAll('.item');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');

            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            items.forEach(item => {
                if (filter === 'boton_todo') {
                    item.classList.remove('hidden');
                } else {
                    const category = item.getAttribute('data-category');
                    if (category === filter) {
                        item.classList.remove('hidden');
                    } else {
                        item.classList.add('hidden');
                    }
                }
            });
        });
    });
});

const sliders = {};

function moverSlides(n, sliderId) {
    const slider = document.getElementById(sliderId);
    const slides = slider.querySelector('.slides');
    const totalSlides = slides.children.length;

    if (!(sliderId in sliders)) {
        sliders[sliderId] = 0;
    }

    sliders[sliderId] += n;

    if (sliders[sliderId] >= totalSlides) {
        sliders[sliderId] = 0;
    } else if (sliders[sliderId] < 0) {
        sliders[sliderId] = totalSlides - 1;
    }

    slides.style.transform = `translateX(${-sliders[sliderId] * 100}%)`;
}

function automaticSlider(sliderId) {
    moverSlides(1, sliderId);
}

// Iniciar el slider automático para cada slider
setInterval(() => automaticSlider('slider1'), 8000); // Cambiar imagen cada 8 segundos para slider1
setInterval(() => automaticSlider('slider2'), 8000); // Cambiar imagen cada 8 segundos para slider2
setInterval(() => automaticSlider('slider3'), 8000); // Cambiar imagen cada 8 segundos para slider2


/////////////////////////////////// validación /////////////////////////





