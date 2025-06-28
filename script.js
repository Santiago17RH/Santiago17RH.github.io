new Swiper('.swiper', {
  loop: true,
  slidesPerView: 3,  // Se adapta al tamaño de las slides
  spaceBetween: 20,       // Espacio entre slides
  speed: 5000,            // Velocidad de transición
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
  breakpoints: {
    0: { 
      slidesPerView: 1,
    },
    640: { 
      slidesPerView: 2,
    },
    1024: { 
      slidesPerView: 3,
    }
  }
});
