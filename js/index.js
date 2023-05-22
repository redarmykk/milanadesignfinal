const myswiper = new Swiper('.swiper-container-1', {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 3000,
  },


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const myswiper2 = new Swiper('.swiper-container-2', {
  // Optional parameters
  loop: true,
  slidesPerView: 5,
  spaceBetween: 10,
  autoplay: {
    delay: 2000,
  },

});

let burger = document.querySelector ('.burger');
let menu = document.querySelector ('.header__nav');
let menuLinks = menu.querySelectorAll ('.nav__link');

burger.addEventListener ('click',

function () {

burger.classList.toggle('burger--active');

menu.classList.toggle('header__nav--active');

document.body.classList.toggle('stop-scroll');

})

menuLinks.forEach(function(el){
  el.addEventListener('click', function() {

    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');

  }) 
})


