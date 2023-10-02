window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const hideText = () => {
    const windowWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    const blockText = document.querySelectorAll(".projects__block-text");

    if (windowWidth <= 576) {
      blockText.forEach((item) => {
        const title = item.querySelector(".projects__subtitle");
        const texts = item.querySelectorAll(".projects__text");

        if (title.offsetHeight > 100) {
          $clamp(title, {
            clamp: 5,
            useNativeClamp: true, // используем -webkit-line-clamp
          });
          texts.forEach((item) => {
            item.style.display = "none";
          });
        } else if (title.offsetHeight >= 57) {
          texts.forEach((item, i) => {
            if (item && i !== 0) {
              item.style.display = "none";
            }
            if (i == 0) {
              $clamp(item, {
                clamp: 2,
                useNativeClamp: true, // используем -webkit-line-clamp
              });
            }
          });
        } else if (title.offsetHeight < 57) {
          texts.forEach((item, i) => {
            if (item && i !== 0) {
              item.style.display = "none";
            } else {
              $clamp(item, {
                clamp: 3,
                useNativeClamp: true, // используем -webkit-line-clamp
              });
            }
          });
        }
      });
    }

    if (windowWidth > 576) {
      blockText.forEach((item) => {
        const title = item.querySelector(".projects__subtitle");
        const texts = item.querySelectorAll(".projects__text");

        $clamp(title, {
          clamp: 10,
          useNativeClamp: true, // используем -webkit-line-clamp
        });
        texts.forEach((item) => {
          item.style.display = "block";
        });
      });
    }
  };
  

  hideText();
  window.addEventListener("resize", hideText);
})