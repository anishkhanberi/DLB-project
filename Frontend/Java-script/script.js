// Initialize Swiper
var swiper = new Swiper(".portfolio-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  breakpoints: {
      768: {
          slidesPerView: 2
      },
      1024: {
          slidesPerView: 3
      }
  }
});
