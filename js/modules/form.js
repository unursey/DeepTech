window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  const checkInput = () => {
    const inputs = document.querySelectorAll(".feedback-form__input");

    inputs.forEach((item) => {
      item.addEventListener("input", () => {
        if (item.value !== '') {
          item.classList.add("feedback-form_active")
        } else {
          item.classList.remove("feedback-form_active")
        }     
      });
    });
  };

  const checkSelect = () => {
    const select = document.querySelector(".feedback-form__select");
    const newSelect = document.querySelector(".new-select");
    const span = document.querySelector('.feedback-form__span-select');
   
    select.addEventListener("click", () => {
      if (newSelect.textContent !== 'Select a project') {
        newSelect.style.opacity = '1';
        span.style.borderBottom = 'solid 3px rgba(76, 77, 77, 1)';
      } else {
        newSelect.style.opacity = '0.3';
        span.style.borderBottom = 'solid 3px rgba(76, 77, 77, 0.3)';
      }
    })
  }

  checkSelect();
  checkInput();
})