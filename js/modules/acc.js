
window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  const acc = () => {
    const qItems = document.querySelectorAll(".faq__item");
    const qBtns = document.querySelectorAll(".faq__btn");
    const qWrapper = document.querySelectorAll(".faq__text-wrapper");

    let heightWrapper = 0;
    qWrapper.forEach(elem => {
      if (heightWrapper < elem.scrollHeight) {
          heightWrapper = elem.scrollHeight;
      }
    })

    qBtns.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        for (let i = 0; i < qItems.length; i++) {
          if (index === i) {
              qWrapper[i].style.height = 
              qItems[i].classList.contains('faq__item_active') ?
              '' : `${heightWrapper}px`
            qItems[i].classList.toggle("faq__item_active");
          } else {
            qItems[i].classList.remove("faq__item_active");
            qWrapper[i].style.height = '';
          }
        }
      });
    });
  };

acc();
})