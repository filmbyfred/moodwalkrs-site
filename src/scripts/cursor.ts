export function initCursor() {
  if (typeof window === 'undefined') return;
  if (window.matchMedia('(max-width: 900px)').matches) return;

  const cursor = document.getElementById('cursor');
  const dot = document.getElementById('cursorDot');
  if (!cursor || !dot) return;

  let mx = 0, my = 0, cx = 0, cy = 0;

  window.addEventListener('mousemove', (e) => {
    mx = e.clientX; my = e.clientY;
    (dot as HTMLElement).style.transform =
      `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
  });

  function loop() {
    cx += (mx - cx) * 0.15;
    cy += (my - cy) * 0.15;
    (cursor as HTMLElement).style.transform =
      `translate(${cx}px, ${cy}px) translate(-50%,-50%)`;
    requestAnimationFrame(loop);
  }
  loop();

  document.querySelectorAll('a, button, .work-card, .role, .cap').forEach((el) => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });
}
