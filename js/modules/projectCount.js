window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  // Получаем все блоки с контентом
  const blocks = document.querySelectorAll('.projects__swiper');

  // Функция для обновления отображения блоков в зависимости от размера экрана
  function updateBlocksDisplay() {
    if (window.innerWidth < 992) {
      // Если ширина экрана меньше 990px, то отображаем 4 блока
      blocks.forEach((block, index) => {
        if (index < 4) {
          block.style.display = 'block';
        } else {
          block.style.display = 'none';
        }
      });
    } else {
      // Иначе, если ширина экрана больше или равна 990px, то отображаем 3 блока
      blocks.forEach((block, index) => {
        if (index < 3) {
          block.style.display = 'block';
        } else {
          block.style.display = 'none';
        }
      });
    }
  }

  // Вызываем функцию для первоначального обновления отображения блоков
  updateBlocksDisplay();

  // Слушаем событие изменения размера окна
  window.addEventListener('resize', updateBlocksDisplay);

});