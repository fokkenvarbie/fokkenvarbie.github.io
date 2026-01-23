document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.querySelector('.cursor');
  if (!cursor) return; 
  
  document.addEventListener('mousemove', e => {
    cursor.style.top = e.clientY + 'px';
    cursor.style.left = e.clientX + 'px';

    const particle = document.createElement('div');
    particle.classList.add('particle');
    document.body.appendChild(particle);

    particle.style.top = e.clientY + 'px';
    particle.style.left = e.clientX + 'px';

    const size = Math.random() * 6 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';

    const dx = (Math.random() - 0.5) * 50;
    const dy = (Math.random() - 0.5) * 50;

    particle.animate([
      { transform: `translate(${dx}px, ${dy}px)`, opacity: 1 },
      { transform: `translate(${dx*2}px, ${dy*2}px)`, opacity: 0 }
    ], {
      duration: 600 + Math.random() * 400,
      easing: 'ease-out',
      fill: 'forwards'
    });

    setTimeout(() => particle.remove(), 1000);
  });
});