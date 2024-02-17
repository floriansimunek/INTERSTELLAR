document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.createElement('div');
  cursor.classList.add('cursor');

  const inner = document.createElement('div');
  inner.classList.add('inner');

  cursor.append(inner);
  document.body.append(cursor);

  document.addEventListener('mousemove', (event) => {
    let x = event.clientX;
    let y = event.clientY;

    cursor.style.top = y + 'px';
    cursor.style.left = x + 'px';
  });

  const hoverElements = document.querySelectorAll('[data-hover]');

  hoverElements.forEach((el) => {
    el.addEventListener('mouseover', () => {
      cursor.classList.add('pointer');
    });
    el.addEventListener('mouseout', () => {
      cursor.classList.remove('pointer');
    });
  });
});
