window.onload = function () {

    const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
        animationTime = 600,
        framesCount = 20;

    anchors.forEach(function (item) {
        // каждому якорю присваиваем обработчик события
        item.addEventListener('click', function (e) {
            // убираем стандартное поведение
            e.preventDefault();

            // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
            let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top;

            // запускаем интервал, в котором
            let scroller = setInterval(function () {
                // считаем на сколько скроллить за 1 такт
                let scrollBy = coordY / framesCount;

                // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
                // и дно страницы не достигнуто
                if (scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
                    // то скроллим на к-во пикселей, которое соответствует одному такту
                    window.scrollBy(0, scrollBy);
                } else {
                    // иначе добираемся до элемента и выходим из интервала
                    window.scrollTo(0, coordY);
                    clearInterval(scroller);
                }
                // время интервала равняется частному от времени анимации и к-ва кадров
            }, animationTime / framesCount);
        });
    });
    // МЕНЮ
    var iconMenu = document.querySelector('.icon-menu');
    var btnMenu = document.querySelector('.btn-menu');
    var menuWrap = document.querySelector('.menu-wrap');

    iconMenu.addEventListener('click', activBtn);

    function activBtn() {
        btnMenu.classList.toggle('btn-menu_active');
        menuWrap.classList.toggle('menu-wrap_active');
    }

    // СЛАЙДЕР

    var btnLeft = document.querySelector('.btn-left');
    var btnRight = document.querySelector('.btn-right');
    var slides = document.querySelectorAll('.slide');
    var cur = 0;
    // var chekBtn = []; 
    // chekBtn.push(document.querySelectorAll('.chek-btn'));

    btnLeft.addEventListener('click', slideLeft);
    btnRight.addEventListener('click', slideRigth);

    function clear() {
        slides.forEach(function (event) {
            event.style.display = 'none';
        });
    };

    function startClear() {
        clear();
        slides[0].style.cssText = 'dispaly: grid';
    }

    startClear();

    function slideLeft() {
        clear();
        if (cur > 0) {
            cur--;
        } else {
            cur = slides.length - 1;
        };
        slides[cur].style.cssText = "animation-name:open; \ animation-duration: 0.7s; \ display:grid";
    };

    function slideRigth() {
        clear();
        if (cur < slides.length - 1) {
            cur++;
        } else if (cur == 2) {
            cur = 0;
        } else {
            cur = 0;
        };
        slides[cur].style.cssText = "animation-name:open; \ animation-duration: 0.7s; \ display:grid";
    };


    // Увеличенное изображение в модальном окне

    var modalWindow = document.querySelector('.modal-window');
    var modalImg = document.querySelector('.modal-img > img');
    var close = document.querySelector('.close');

    close.addEventListener('click', closeModal);

    function openModal() {
        modalWindow.style.display = 'block';
    }

    function closeModal() {
        modalWindow.style.display = 'none';
    }

    var itemWork = document.querySelectorAll('.work');

    itemWork.forEach(function (event) {
        event.addEventListener('click', clickImg);
    })

    function clickImg() {
        var attrImg = this.childNodes[2].getAttribute('src');
        modalImg.setAttribute('src', attrImg);
        openModal();
    }

    // Галерея изображений

    var btnAll = document.querySelector('.all');
    var btnPhoto = document.querySelector('.photography');
    var btnLogoD = document.querySelector('.logo-d');
    var btnWebD = document.querySelector('.web-d');

    var work = document.querySelectorAll('.work');
    var liPortMenu = document.querySelectorAll('.port-menu > li');

    btnAll.addEventListener('click', allDisplay);
    btnPhoto.addEventListener('click', photoDisplay);
    btnWebD.addEventListener('click', webDisplay);
    btnLogoD.addEventListener('click', logoDispaly);

    function resetLi() {
        liPortMenu.forEach(function (event) {
            if (event.classList.contains('active_port_menu')) {
                event.classList.remove('active_port_menu')
            }
        })
    }

    function allDisplay() {
        resetLi();
        work.forEach(function (event) {
            if (event.classList.contains('work')) {
                event.style.display = '';
            }
        })
        this.classList.add('active_port_menu');
    };

    function photoDisplay() {
        resetLi();
        work.forEach(function (event) {
            if (!event.classList.contains('photo')) {
                event.style.display = 'none';
            } else {
                event.style.display = '';
            }
        });
        this.classList.add('active_port_menu');
    };

    function webDisplay() {
        resetLi();
        work.forEach(function (event) {
            if (!event.classList.contains('port')) {
                event.style.display = 'none';
            } else {
                event.style.display = '';
            }
        });
        this.classList.add('active_port_menu');
    };

    function logoDispaly() {
        resetLi();
        work.forEach(function (event) {
            if (!event.classList.contains('web-dis')) {
                event.style.display = 'none';
            } else {
                event.style.display = '';
            }
        });
        this.classList.add('active_port_menu');
    }


};