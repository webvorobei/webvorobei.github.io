window.onload = function() {

    let navLinks = document.querySelectorAll('.navigation__menu-link'); //Собираем все ссылки
    let navig = document.querySelector('.navigation');
    let linkAttr; // Переменная для хранения значения, аттрибута href
    let currPossition; // Переменная для хранения текущей позиции на сайте
    let dist; // Переменная для хранения расстояния до блока, до которого скроллим
    let timer; // Переменная для хранения setTimeout
    let blockSkill = document.querySelector('.skills-section').getBoundingClientRect().top + pageYOffset;
    let scaleNo = document.querySelectorAll('.scale__no-active');
    let width = document.body.clientWidth || document.documentElement.clientWidth; /* Получаем ширину экрана */
    let menuNavigation = document.querySelector('.navigation'); /* меню навигации */
    let menuBtn = document.querySelector('.btn-menu'); /* кнопка меню */
    let btnMenuItem = document.querySelector('.btn-menu_item');
    let btnContact = document.querySelector('.navigation__menu-contact'); /*кнопка для вызова контактов */
    let windowContact = document.querySelector('.my-contacts-section'); /* окно контакты */
    let btnCloseContact = document.querySelector('.my-contacts__btn-close'); /* кнопка закрыть контакты */

    // если ширина окна меньше 800, то вызываем функцию фиксации меню
    if (width < 800) {
        this.removeEventListener('scroll', menuFix);
    } else {
        this.addEventListener('scroll', menuFix);
    }

    // кнопка открыть, закрыть меню
    menuBtn.addEventListener('click', () => {
        if (!btnMenuItem.classList.contains('btn-menu_item-active')) {
            btnMenuItem.classList.add('btn-menu_item-active');
            menuNavigation.classList.add('navigation-active');
        } else {
            btnMenuItem.classList.remove('btn-menu_item-active');
            menuNavigation.classList.remove('navigation-active');
        }
        console.log('click');
    });

    // вызов функции фиксации меню
    function menuFix() {
        currPossition = document.body.scrollTop || document.documentElement.scrollTop;
        if (currPossition > 80) {
            navig.classList.add('navigation_fix');
        } else {
            navig.classList.remove('navigation_fix')
        };
    };

    addEventListener('scroll', ishemBlock);

    function ishemBlock() {
        currPossition = document.body.scrollTop || document.documentElement.scrollTop;
        if (currPossition >= blockSkill - 50) {
            scaleNo.forEach(function(e) {
                e.classList.remove('scale__no-active');
            });
            removeEventListener('scroll', ishemBlock);
        }
    }

    /*============================
     Плавная прокрутка к якорям 
     ===========================*/

    /* Перебираем все ссылки и вешаем событие клик */
    navLinks.forEach(function(item) {
        item.addEventListener('click', goLink);
    });

    /* обработка события клик */
    function goLink(item) {
        item.preventDefault(); // отмена стандартного действия ссылки
        linkAttr = item.target.getAttribute('href'); // получаем атрибут по нажатой ссылке
        currPossition = document.body.scrollTop || document.documentElement.scrollTop; // получаем текущее положение на сайте
        dist = document.querySelector(linkAttr).getBoundingClientRect().top + pageYOffset; //получаем расстояние до блока

        smoothScroll(); // Вызов функции плавной прокрутки
    }

    function smoothScroll() {

        if (currPossition < dist) {
            scrollDown();
        } else if (currPossition > dist) {
            scrollUp();
        };

        function scrollDown() {
            if (currPossition < dist) {
                currPossition += 20;
                scrollTo(0, currPossition);
                timer = setTimeout(scrollDown, 5);
            } else {
                scrollTo(0, dist);
                clearTimeout(timer);
            }
        };

        function scrollUp() {
            if (currPossition > dist) {
                currPossition -= 20;
                scrollTo(0, currPossition);
                timer = setTimeout(scrollUp, 5);
            } else {
                scrollTo(0, dist);
                clearTimeout(timer);
            }
        }
    }

    btnContact.addEventListener('click', () => {
        windowContact.classList.add('my-contacts-section-active');
    });

    btnCloseContact.addEventListener('click', () => {
        windowContact.classList.remove('my-contacts-section-active');
    });
};