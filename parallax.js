window.onload = () => {
  const DIVIDER = 100;
  let mouseX = 0;
  let mouseY = 0;

  const container = document.querySelector('.background__container');
  const image = document.querySelector('.background__image');

  setTimeout(() => {
    container.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      updatePosition();
    });

    function updatePosition() {
      const targetOffsetX = (container.offsetWidth / 2 - mouseX) / DIVIDER;
      const targetOffsetY = (container.offsetHeight / 2 - mouseY) / DIVIDER;

      image.style.setProperty(
        'transform',
        `translate(${targetOffsetX}px, ${targetOffsetY}px)`,
        'important',
      );
      image.style.scale = 1.2;
    }
  }, 1250);
};
