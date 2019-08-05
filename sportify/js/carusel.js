let widthMedia = document.documentElement.offsetWidth || document.body.offsetWidth; /*ширина страницы*/
let wrapСarusel = document.querySelector('.wrap-carusel'); /* обертка карусели  */
let carusel = document.querySelector('.carusel'); /* карусель  */
let cls = document.querySelectorAll('.carusel-item'); /* слайд  */
let btnCarusel = document.querySelector('.btn-carusel');

let cur = 0; /* счетчик */
let widthWrapСarusel = wrapСarusel.offsetWidth; /* получить ширину обертки карусели */
let clsMargin = parseInt(getComputedStyle(cls[0]).marginRight) + parseInt(getComputedStyle(cls[0]).marginLeft); /* собираем отступы слева и справа */
let widthCaruselItem = widthWrapСarusel / 3 - clsMargin; /* поучить ширину для слайда */
let widthCarusel = widthCaruselItem * cls.length - 1 + clsMargin * cls.length - 1; /* создать ширину для карусели */



carusel.style.width = `${widthCarusel + 150}px`; /* присвоить ширину карусели */
cls.forEach((element) => {
  element.style.width = widthCaruselItem + 'px'; /* для каждого слайда назначить ширину */
});



if (widthMedia > 1024) {
  mediaMax();
} else if (widthMedia < 1024 && widthMedia > 480) {
  mediaMidle();
} else if (widthMedia < 480) {
  mediaLite();
}

function mediaMax() {

  console.log('MAX');
  setInterval(() => {
    if (cur >= widthCarusel - (cls[0].offsetWidth * 3 + clsMargin * 3)) {
      cur = 0;
      carusel.style.transform = 'translateX(-' + cur + 'px)';
    } else {
      cur += cls[0].offsetWidth + clsMargin;
      carusel.style.transform = 'translateX(-' + cur + 'px)';
    };

  },4000);
};

function mediaMidle(){
  let widthCaruselItem = widthWrapСarusel / 2 - clsMargin;
  let widthCarusel = widthCaruselItem * cls.length - 1 + clsMargin * cls.length - 1;
  carusel.style.width = `${widthCarusel + 150}px`; /* присвоить ширину карусели */

  cls.forEach((element) => {
    element.style.width = widthCaruselItem + 'px';  /* для каждого слайда назначить ширину */
  });

  console.log('MIDLE');

  setInterval( () => {
    if (cur >= widthCarusel - (cls[0].offsetWidth * 2 + clsMargin * 2)) {
      cur = 0;
      carusel.style.transform = 'translateX(-' + cur + 'px)';
    } else {
      cur += cls[0].offsetWidth + clsMargin;
      carusel.style.transform = 'translateX(-' + cur + 'px)';
    }

  },4000);

};

function mediaLite(){
  let widthCaruselItem = widthWrapСarusel - clsMargin;
  let widthCarusel = widthCaruselItem * cls.length - 1 + clsMargin * cls.length - 1;
  carusel.style.width = `${widthCarusel + 150}px`; /* присвоить ширину карусели */

  cls.forEach((element) => {
    element.style.width = widthCaruselItem + 'px';  /* для каждого слайда назначить ширину */
  });

  setInterval( () => {
    if (cur >= widthCarusel - (cls[0].offsetWidth + clsMargin)) {
      cur = 0;
      carusel.style.transform = 'translateX(-' + cur + 'px)';
    } else {
      cur += cls[0].offsetWidth + clsMargin;
      carusel.style.transform = 'translateX(-' + cur + 'px)';
    }

  },4000);
};


































