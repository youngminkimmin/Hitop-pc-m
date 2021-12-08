const mainVisualSlider = new Swiper("#mainVisual", {
  autoplay: true,
  speed: 1000,
  effect: "cube",
  loop: true,
  navigation: {
    prevEl: "#mainVisual .prev",
    nextEl: "#mainVisual .next",
  },
});

const newsSlider = new Swiper("#news .listBox", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 2,
  centeredSlides: true,
});
//f(x,y) = x+y*3; f(3,5) = 18

// const btnAll = document.querySelector(".all");
// const gnb = document.querySelector("#gnb");
// console.log(btnAll);
// btnAll.addEventListener("click", function () {
//   // alert("all 을 눌렀습니다.");
//   gnb.classList.toggle("on");
//   btnAll.classList.toggle("on");
//   //add / remove
// });
//alert("나는 바로뜨는 경고창입니다.");

//jQuery class 관련한 4가지 메서드를 제공한다. addClass  추가  removeClass 제거     hasClass , toggleClass
const header = $("#header");
const btnAll = $(".all");
const gnb = $("#gnb");
const depth02 = gnb.find(".list > li > .depth02");
const depth01 = gnb.find(".list > li > a");

btnAll.on("click", function () {
  gnb.toggleClass("on");
  btnAll.toggleClass("on");
  depth02.stop().delay(500).slideUp();
});
depth01.on("click", function (e) {
  e.preventDefault();
  console.log("aaa");
  const selectedDepth02 = $(this).siblings(".depth02");
  const parentDepth02 = $(this).parent().siblings().find(".depth02");
  parentDepth02.stop().slideUp();
  selectedDepth02.slideToggle(); // show() 메서드는 display를 block으로 바꿔준다. hide() 는 display를 none으로 바꿔준다.
  return false;
});

$(window).on("scroll", function () {
  // console.log($(window).scrollTop());
  const st = $(window).scrollTop();
  if (st > 0) {
    if (!header.hasClass("scroll")) {
      header.addClass("scroll");
    }
  } else {
    if (header.hasClass("scroll")) {
      header.removeClass("scroll");
    }
  }
});
