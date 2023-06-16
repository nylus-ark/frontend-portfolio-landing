const servicesSlider = document.querySelector('.services-slider__swiper');

if (servicesSlider) {
  const servicesSwiper = new Swiper('.services-slider__swiper', {
    loop: false,
    spaceBetween: 10,

    navigation: {
      nextEl: '.services-slider__btn-next',
      prevEl: '.services-slider__btn-prev',
    },
  });
}

const testimonialsSlider = document.querySelector('.testimonials-slider');

if (testimonialsSlider) {
  const testimonialsSwiper = new Swiper('.testimonials-slider', {
    loop: false,

    navigation: {
      nextEl: '.testimonials__btn-next',
      prevEl: '.testimonials__btn-prev',
    },
  });
}
