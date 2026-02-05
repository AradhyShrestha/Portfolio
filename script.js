const swiper = new Swiper('.myswiper', {
  direction: 'vertical',
  loop: true,
  spaceBetween: 20,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.custom-next',
    prevEl: '.custom-prev',
  },

  // ✅ Responsive behavior
  breakpoints: {
    0: {
      direction: 'horizontal',
      slidesPerView: 1,
    },
    768: {
      direction: 'horizontal',
      slidesPerView: 2,
    },
    1024: {
      direction: 'vertical',
      slidesPerView: 3,
    }
  }
});
