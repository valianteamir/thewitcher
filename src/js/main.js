'use strict';

const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.header');

menuButton.addEventListener('click', function () {
	menuButton.classList.toggle('menu-button_active');
	menu.classList.toggle('header_active');
});

const swiper = new Swiper('.swiper', {
	slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
  },
	touchAngle: 90,
	slideToClickedSlide: true,
	keyboard: {
		enabled: true,
		pageUpDown: false,
	},
	autoHeight: true,
	loop: true,
	speed: 500,
	breakpoints: {
    // when window width is >= 320px
    410: {
      slidesPerView: 2,
      spaceBetween: 20
    },
  }
});