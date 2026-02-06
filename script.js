document.addEventListener("DOMContentLoaded", function () {
  if (typeof Swiper === "undefined") {
    console.error("Swiper not loaded");
    return;
  }

  new Swiper('.myswiper', {
    direction: 'vertical',
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.custom-next',
      prevEl: '.custom-prev',
    },

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
});
