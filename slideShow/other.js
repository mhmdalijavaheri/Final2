// Code By MohammadAliJavaheri
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    // If we need pagination
    autoplay: {
        delay: 3000,
        disableOnIntraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });