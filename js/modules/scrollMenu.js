window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const scroll = () => {
    const header = document.querySelector(".header");
    const headerNav = document.querySelector(".header__menu");
    const headerBtn = document.querySelector(".header__btn");
    const headerImg = document.querySelector(".header__img");
    const headerBurger = document.querySelector(".header__burger-btn");

    window.addEventListener("scroll", () => {
      if (
        document.body.getBoundingClientRect().top < -80 ||
        !document.querySelector(".present")
      ) {
        header.classList.add("header_theme_grey");
        headerNav.classList.add("header__menu_theme_grey");
        headerBtn.classList.add("header__btn_theme_grey");
        headerBurger.classList.add("header__burger-btn_theme_grey");
        headerImg.src = "img/header/logo.png";
      } else {
        header.classList.remove("header_theme_grey");
        headerNav.classList.remove("header__menu_theme_grey");
        headerBtn.classList.remove("header__btn_theme_grey");
        headerBurger.classList.remove("header__burger-btn_theme_grey");
        headerImg.src = "img/header/logo-light.png";
      }

      let scrollDistance = window.scrollY;

      if (window.innerWidth > 992) {
        document.querySelectorAll(".section-scroll").forEach((el, i) => {
          if (
            el.offsetTop - document.querySelector(".header__menu").clientHeight <=
            scrollDistance
          ) {
            document.querySelectorAll(".header__scroll").forEach((el) => {
              if (el.classList.contains("active")) {
                el.classList.remove("active");
              }
            });

            document
              .querySelectorAll(".header__scroll")
              [i].classList.add("active");
          }
        });
      }
    });
  };

  scroll();
})