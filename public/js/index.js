
//CONTROLADOR SLIDER HOME
var swiper = new Swiper(".home-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    /*navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },*/
  });

//CONTROLADOR SLIDER CATEGORIAS
  var swiper = new Swiper(".category-slider", {
    loop:false,
    spaceBetween: 20,
    pagination: {
       el: ".swiper-pagination",
       clickable:true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
       350: {
          slidesPerView: 2,
        },
       650: {
         slidesPerView: 3,
       },
       768: {
         slidesPerView: 4,
       },
       1024: {
         slidesPerView: 5,
       },
    },
 });

 var swiper = new Swiper(".product-slider", {
  loop:true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});