'use strict';

// Slider one

var active = 0;
var prev = 0;
var leftArrow = document.querySelector('.left__arrow');
var rightArrow = document.querySelector('.right__arrow');
var slides = document.getElementsByClassName('slide');

var clickRightArrow = function () {
  rightArrow.addEventListener('click', function () {
    active >= 0 && active < slides.length - 1 ? ++active : active = 0;
    changeActiveSlide();
  });
};
clickRightArrow();

var clickLeftArrow = function () {
  leftArrow.addEventListener('click', function () {
    active > 0 ? --active : active = slides.length - 1;
    changeActiveSlide();
  });
};
clickLeftArrow();

var changeActiveSlide = function () {
  slides[prev].classList.remove('slide__Active');
  slides[active].classList.add('slide__Active');
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.transform = 'translate(' + -(active * 100) + '%)';
  }
};

/* Slider two*/ /*
var active = 0; // переменная для текущего и предыдущего активного слайда
var prev = 0; // переменная для текущего и предыдущего активного слайда

var navs = document.getElementsByClassName('sn_item');
for (var i = 0; i < navs.length; i++) {
  (function (i) {
    navs[i].addEventListener('click', function () {
      prev = active;
      active = i;
      civeSlidehangeAct(prev);
    });
  })(i);
}
// Добавляем в функцию 2 строчки для изменения активного класса кнопок
var changeActiveSlide = function () {
  slides[prev].classList.remove('slideActive');
  slides[active].classList.add('slideActive');
  navs[prev].classList.remove('sn_itemActive');
  navs[active].classList.add('sn_itemActive');

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.transform = 'translate(' + -(active * 100) + '%)';
  }
};
*/
