window.addEventListener('load', () => {
	let currPossition = document.body.scrollTop || document.documentElement.scrollTop; // получаем текущее положение на сайте
	let transitionAnimate = 500;
	let headerFixed = document.querySelector('#header-fixed'); // фиксированное меню
	let btnOpenMenu = document.querySelectorAll('.btn-open'); // кнопка вызова модального меню
	let btnCloseMenu = document.querySelector('.container-modal-menu_btn-close');
	let wrapModalMenu = document.querySelector('.wrap-modal-menu'); // модальное меню
	let modalMenuBook = document.querySelectorAll('.wrap-modal-menu__book'); // блоки для анимации модльного меню
	let containerModalMenu = document.querySelector('.container-modal-menu');
	
  // Фиксированное меню
	this.addEventListener('scroll', () => {
		currPossition = document.body.scrollTop || document.documentElement.scrollTop; 
		if(currPossition > 220){
			headerFixed.classList.add('header-fixed_active');
		}else{
			headerFixed.classList.remove('header-fixed_active');
		}
	});

	btnOpenMenu.forEach((e) => {
		e.addEventListener('click', () => {
			wrapModalMenu.style.display = 'block';
			setTimeout(() => {
				modalMenuBook.forEach((event) => {
					event.style.transition = transitionAnimate + "ms";
					event.style.width = '50%';
				});
			},10);
			setTimeout(() => {
				containerModalMenu.style.opacity = "1";
			},transitionAnimate);
		});
	});

	btnCloseMenu.addEventListener('click', () => {
		containerModalMenu.style.opacity = "0";
		setTimeout(() => {
			modalMenuBook.forEach((event) => {
				event.style.width = '0%';
			});
		},transitionAnimate);
		setTimeout(() => {
			wrapModalMenu.style.display = 'none';
		},transitionAnimate + transitionAnimate);
	});

});