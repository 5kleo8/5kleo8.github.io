window.addEventListener('load', function() {
    // Obtiene el elemento h1
    const h1Element = document.querySelector('#hero h1');

    // Aplica los estilos para mostrar el h1 con una transición
    h1Element.style.opacity = '1';
    h1Element.style.transform = 'translateY(0)';
  });


  const mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1, // Número de slides visibles a la vez
    spaceBetween: 20, // Espacio entre slides
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});