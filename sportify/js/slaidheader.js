	// Слайдер хедер
  let slides = document.querySelectorAll('.slide'); // собираем все слайды
  let current = 0; // счетчик слайдов
  let transitionAnimate = 500;
  
  slides.forEach((e) => {
		e.style.display = 'none';
	});

	slides[current].style.display = 'block';

	setInterval(() => {
		if (current != slides.length - 1) {
			current++;
			slides[current - 1].classList.add('hide');
			slides[current - 1].classList.remove('show');
			setTimeout(() => {
				slides[current - 1].style.display = 'none';
			}, 1000)
			slides[current].style.display = 'block';
			slides[current].classList.add('show');
			slides[current].classList.remove('hide');
		} else {
			current = 0;
			slides[slides.length - 1].classList.add('hide');
			slides[slides.length - 1].classList.remove('show');
			setTimeout(() => {
				slides[slides.length - 1].style.display = 'none';
			}, 1000)
			slides[current].style.display = 'block';
			slides[current].classList.add('show');
			slides[current].classList.remove('hide');
		}
	}, 4000);