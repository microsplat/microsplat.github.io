(function () {
  const outer = document.getElementById('carouselOuter');
  if (!outer) return;

  const slides = Array.from(outer.querySelectorAll('.carousel-slide'));
  const dotsContainer = document.getElementById('carouselDots');
  const total = slides.length;
  let current = 0;
  let timer;

  function update() {
    slides.forEach((slide, i) => {
      slide.classList.remove('is-active', 'is-prev', 'is-next');
      const rel = ((i - current) % total + total) % total;
      if (rel === 0) slide.classList.add('is-active');
      else if (rel === total - 1) slide.classList.add('is-prev');
      else if (rel === 1) slide.classList.add('is-next');
    });
    dotsContainer.querySelectorAll('.carousel-dot').forEach((dot, i) => {
      dot.classList.toggle('is-active', i === current);
    });
  }

  function advance(dir) {
    current = ((current + dir) % total + total) % total;
    update();
  }

  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot';
    dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
    dot.addEventListener('click', () => { current = i; update(); });
    dotsContainer.appendChild(dot);
  });

  document.getElementById('carouselPrev').addEventListener('click', () => advance(-1));
  document.getElementById('carouselNext').addEventListener('click', () => advance(1));

  slides.forEach(slide => {
    slide.addEventListener('click', () => {
      if (slide.classList.contains('is-prev')) advance(-1);
      else if (slide.classList.contains('is-next')) advance(1);
    });
  });

  function startTimer() { timer = setInterval(() => advance(1), 4500); }
  function stopTimer() { clearInterval(timer); }

  outer.addEventListener('mouseenter', stopTimer);
  outer.addEventListener('mouseleave', startTimer);

  update();
  startTimer();
}());
