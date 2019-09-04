 // console.log('zaebok');
 let projectLink = document.querySelectorAll('.portfolio-menu__item');
 let worksItem = document.querySelectorAll('.works__item');
 let modalWindowImg = document.querySelector('.modal-window__img img');
 let modalWindow = document.querySelector('.modal-window');
 let btnClose = document.querySelector('.modal-window_close');
 let srcImg; 

 // вызов картинки в модальном окне 
 worksItem.forEach((i) => {
    i.addEventListener('click', () => {
			 srcImg = i.firstElementChild.getAttribute('src');
			 console.log(srcImg);
       modalWindow.classList.add('modal-window_open');
       modalWindowImg.setAttribute('src', srcImg);
       document.body.style.overflow = 'hidden';
    })
 });

 btnClose.addEventListener('click', () => {
    modalWindow.classList.remove('modal-window_open');
    document.body.style.overflow = 'scroll';
 });

 projectLink.forEach((event) => {
    event.addEventListener('click', () => {
       projectLink.forEach((ev) => {
          ev.classList.remove('portfolio-menu__item_active');
       });
       event.classList.add('portfolio-menu__item_active');

       if (event.classList.contains('portfolio-menu__item_all')) {
          worksItem.forEach((item) => {
             item.classList.remove('works__item_no-active');
          });
       } else if (event.classList.contains('portfolio-menu__item_photo')) {
          worksItem.forEach((item) => {
             if (!item.classList.contains('works__item_photo')) {
                item.classList.add('works__item_no-active');
             } else {
                item.classList.remove('works__item_no-active');
             }
          });
       } else if (event.classList.contains('portfolio-menu__item_events')) {
          worksItem.forEach((item) => {
             if (!item.classList.contains('works__item_events')) {
                item.classList.add('works__item_no-active');
             } else {
                item.classList.remove('works__item_no-active');
             }
          });
       } else if (event.classList.contains('portfolio-menu__item_design')) {
          worksItem.forEach((item) => {
             if (!item.classList.contains('works__item_design')) {
                item.classList.add('works__item_no-active');
             } else {
                item.classList.remove('works__item_no-active');
             }
          });
       } else if (event.classList.contains('portfolio-menu__item_project')) {
          worksItem.forEach((item) => {
             if (!item.classList.contains('works__item_project')) {
                item.classList.add('works__item_no-active');
             } else {
                item.classList.remove('works__item_no-active');
             }
          });
       }
    });
 });