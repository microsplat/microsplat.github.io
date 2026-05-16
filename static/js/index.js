(function () {
  const outer = document.getElementById('carouselOuter');
  if (!outer) return;

  const slides = Array.from(outer.querySelectorAll('.carousel-slide'));
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
  }

  function advance(dir) {
    current = ((current + dir) % total + total) % total;
    update();
  }

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
