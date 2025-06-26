    const slides = document.querySelectorAll('.slide');
    let current = 0;
    const prevBtn = document.querySelector('#prev');
    const nextBtn = document.querySelector('#next');

    function showSlide(idx) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === idx);
        slide.classList.toggle('hidden', i !== idx);
      });
      prevBtn.disabled = idx === 0;
      nextBtn.disabled = idx === slides.length - 1;
    }

    prevBtn.addEventListener('click', () => {
      if (current > 0) {
        current--;
        showSlide(current);
      }
    });
    nextBtn.addEventListener('click', () => {
      if (current < slides.length - 1) {
        current++;
        showSlide(current);
      }
    });
    showSlide(current);