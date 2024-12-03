document.addEventListener('DOMContentLoaded', () => {
  let links = document.querySelectorAll('.menu a'),
      ind = document.querySelector('.indicator');

  links.forEach(item => {
    item.addEventListener('mouseenter', (e) => {
      moveInd(e.target);
    });
  });

  function moveInd(el) {
    ind.style.width = `${el.offsetWidth}px`; // Устанавливаем ширину
    ind.style.left = `${el.offsetLeft}px`;   // Устанавливаем положение
  }
});