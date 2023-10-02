window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const page = document.querySelector(".page");
  const modal= page.querySelector(".feedback-modal");
  const btnOpen = page.querySelector(".project__cart-btn");
  const container = document.querySelector(".header")


  const pageOverfow = () => {
    const bodyWidth = page.offsetWidth;
    if (modal.classList.contains("feedback-modal_visible")) {
      page.style.overflow = "hidden";
      page.style.paddingRight = `${getScrollBarSize(bodyWidth)}px`;
      container.style.paddingRight = `${getScrollBarSize(bodyWidth)}px`;
    } else {
      page.style.overflow = "";
      page.style.paddingRight = "";
      container.style.paddingRight = "";
    }
  };

  const getScrollBarSize = (bodyWidth) => {
    let newBodyWidth = page.offsetWidth;
    if (newBodyWidth === bodyWidth) {
      return;
    }
    const x = newBodyWidth - bodyWidth;
    return x;
  };

  const closeModal = () => {
    if (modal.classList.contains("feedback-modal_visible")) {
      modal.classList.remove("feedback-modal_visible");
    }
  };

  const addOpenModal = () => {
    btnOpen.addEventListener("click", () => {
      modal.classList.add("feedback-modal_visible");  
      pageOverfow();
    });
  };

  const addCloseModal = () => {
    page.addEventListener("click", (e) => {
      if (
        e.target === modal ||
        e.target.classList.contains("container") ||
        e.target.closest(".feedback-form__btn-close")
      ) {
        closeModal();
        pageOverfow();
      }
    });
  };

  addCloseModal();
  addOpenModal();
})