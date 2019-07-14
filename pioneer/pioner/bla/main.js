window.onload = function () {
/*============================
 Плавная прокрутка к якорям 
 ===========================*/
  let navLinks = document.querySelectorAll('.menu__link');     //Собираем все ссылки
  let linkAttr;       // Переменная для хранения значения, аттрибута href
  let currPossition;  // Переменная для хранения текущей позиции на сайте
  let dist;           // Переменная для хранения расстояния до блока, до которого скроллим
  let timer;          // Переменная для хранения setTimeout
 
  /* Перебираем все ссылки и вешаем событие клик */
  navLinks.forEach(function (item) {
    item.addEventListener('click', goLink);
  });

  /* обработка события клик */
  function goLink(item) {
    item.preventDefault(); // отмена стандартного действия ссылки
    linkAttr = item.target.getAttribute('href'); // получаем атрибут по нажатой ссылке
    currPossition = document.body.scrollTop || document.documentElement.scrollTop;  // получаем текущее положение на сайте
    dist = document.querySelector(linkAttr).getBoundingClientRect().top + pageYOffset; //получаем расстояние до блока
    
    smoothScroll(); // Вызов функции плавной прокрутки
  }

  function smoothScroll(){

    if(currPossition < dist){
      scrollDown();
    }else if(currPossition > dist){
      scrollUp();
    };

    function scrollDown(){
      if(currPossition < dist) {
        currPossition += 15
        scrollTo(0, currPossition);
        timer = setTimeout(scrollDown, 5);
      }else{
        scrollTo(0, dist);
        clearTimeout(timer);
      }
    };

    function scrollUp(){
      if(currPossition > dist) {
        currPossition -= 15
        scrollTo(0, currPossition);
        timer = setTimeout(scrollUp, 5);
      }else{
        scrollTo(0, dist);
        clearTimeout(timer);
      }
    }
  }

};