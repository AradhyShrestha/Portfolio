var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: { delay: 2500 },
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: { nextEl: ".custom-next", prevEl: ".custom-prev" },
    breakpoints: {
      0: { slidesPerView: 3 },
      576: { slidesPerView: 3 },
      992: { slidesPerView: 3 }
    }
  });
  
