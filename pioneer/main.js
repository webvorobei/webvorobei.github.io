window.onload = () => {
   let linkAttr; // Переменная для хранения значения, аттрибута href
   let currPossition = document.body.scrollTop || document.documentElement.scrollTop; // получаем текущее положение на сайте
   let dist; // Переменная для хранения расстояния до блока, до которого скроллим
   let timer; // Переменная для хранения setTimeout
   let navLinks = document.querySelectorAll('.menu__item_link'); //Собираем все ссылки
   let menuBtn = document.querySelector('.navigation__menu-btn'); /* переменная для хранения кнопки меню */
   let menu = document.querySelector('.menu'); /* Главное меню */
   let btnUp = document.querySelector('.up-btn');
   let secondBlock = document.querySelector('#section-services').getBoundingClientRect().top + pageYOffset; /* расстояние до второрго блока */
   let nextBlokBtn = document.querySelector('.header__next-btn');

   // Появление кнопки наверх при скролле
   this.addEventListener('scroll', () => {
      currPossition = document.body.scrollTop || document.documentElement.scrollTop;
      if (currPossition > 450){
         btnUp.classList.add('up-btn-active');
      }else{
         btnUp.classList.remove('up-btn-active');
      }
      // console.log(currPossition);
   });

   nextBlokBtn.addEventListener('click', function nextBlock(){
      if(currPossition < secondBlock){
         currPossition += 22;
         scrollTo(0, currPossition);
         timer = setTimeout(nextBlock, 15);
      }else{
         clearTimeout(timer);
      }
   });

   btnUp.addEventListener('click', function goUp(){
      if(currPossition != 0){
         currPossition -= 22;
         scrollTo(0, currPossition);
         timer = setTimeout(goUp, 5);
      }else{
         clearTimeout(timer);
      }
   });

   // Открываем, закрываем меню
   menuBtn.addEventListener('click', () => {
      menu.classList.toggle('menu-open');
   });

   /* Перебираем все ссылки и вешаем событие клик */
   navLinks.forEach(function (item) {
      item.addEventListener('click', goLink);
   });

   /* обработка события клик */
   function goLink(item) {
      item.preventDefault(); // отмена стандартного действия ссылки
      if(menu.classList.contains('menu-open')){
         menu.classList.remove('menu-open');
      }
      menu.classList.remove('menu-open');
      linkAttr = item.target.getAttribute('href'); // получаем атрибут по нажатой ссылке
      dist = document.querySelector(linkAttr).getBoundingClientRect().top + pageYOffset; //получаем расстояние до блока

      smoothScroll(); // Вызов функции плавной прокрутки
   }

   function smoothScroll(){
      if(currPossition < dist){
         currPossition += 22;
         scrollTo(0, currPossition);
         timer = setTimeout(smoothScroll, 5);
      }else{
         scrollTo(0, dist);
         clearTimeout(timer);
      }
   }

}