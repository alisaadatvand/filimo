import menu from "./menu/menu";
import mostPopular from "./mostPopular/mostPopular";
import serial from "./mostPopular/serial";
import slider from "./slider/slider";
import sliderContent from "./slider/sliderContent";
import watch from "./watch/watch";
import learn from "./learn/learn";
import free from "./free/free";
import world from "./world/world";
import online from "./online/online";
import comments from "./comments/comment";
import questions from "./questions/questions";
import filimo from "./filimo/filimo";
import footer from "./footer/footer";


async function allData() {
  await swiper();
  await sliderContent();
  await mostPopular();
  await serial();
  await watch();
  await learn();
  await free();
  await world();
  await online();
  await comments();
  await questions();
  await filimo();
  await footer();
}

allData();

async function swiper() {
  await menu();
  await slider();
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 0,
    centeredSlides: false,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".serialSwiper", {
    slidesPerView: 3,
    spaceBetween: 40,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".freeSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".commentsSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
