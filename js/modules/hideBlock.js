window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const acc = () => {

  const qBtns = document.querySelectorAll(".partners__link");
  const qWrapper = document.querySelectorAll(".partners__text-block");

  let heightWrapper = 0;
  qWrapper.forEach(elem => {
    if (heightWrapper < elem.scrollHeight) {
        heightWrapper = elem.scrollHeight;
    }
  })

    qBtns.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        for (let i = 0; i < qBtns.length; i++) {
          if (index === i) {
              qWrapper[i].style.height =           
              qBtns[i].classList.contains('partners__link_active') ?
              '' : `${heightWrapper}px`

              qBtns[i].classList.toggle("partners__link_active");
          } else {
            qBtns[i].classList.remove("partners__link_active");
            qWrapper[i].style.height = '';
          }
        }
      });
    });
  };

  acc()

});
