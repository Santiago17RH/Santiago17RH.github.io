new Swiper('.swiper', {
  loop: true,
  slidesPerView: 3,  // Se adapta al tamaño de las slides
  spaceBetween: 5,       // Espacio entre slides
  speed: 2000,            // Velocidad de transición
  autoplay: {
    delay: 0,             // Sin pausa entre transiciones
    disableOnInteraction: false, // Sigue moviéndose tras interactuar
  },
  freeMode: {
    enabled: true,
    momentum: false,      // Evita que siga deslizándose al soltar
  },
  grabCursor: true,        // Cambia el cursor al de "arrastrar"
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: false // No mostrar flechas
});
