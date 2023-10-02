window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const simpleSlider = () => {
    const swiper = new Swiper(".simple-swiper", {
      effect: "fade",
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
    });
  };

  const partnersSlider = () => {
    const swiper = new Swiper(".partners-swiper", {
      slidesPerView: 2,
      spaceBetween: 0,

      navigation: {
        nextEl: ".partners__next",
        prevEl: ".partners__prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },

        1200: {
          slidesPerView: 4,
        },
      },
    });
  };

  const gallerySlider = () => {
    const swiper = new Swiper(".project__swiper-gallery", {
      spaceBetween: 10,
      slidesPerView: 1,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
        576: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
    const swiper2 = new Swiper(".project__swiper-gallery2", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
      thumbs: {
        swiper: swiper,
      },
      breakpoints: {
        1200: {
          spaceBetween: 30,
        },
      },
    });
  };

  simpleSlider();
  partnersSlider();
  gallerySlider();
})