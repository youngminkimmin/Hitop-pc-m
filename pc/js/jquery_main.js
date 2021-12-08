Splitting();

const mainVisualSlider = new Swiper("#mainVisual", {
  autoplay: true,
  speed: 1000,
  effect: "fade",
  loop: true,
  navigation: {
    prevEl: "#mainVisual .prev",
    nextEl: "#mainVisual .next",
  },
});
//f(x,y) = x+y*3; f(3,5) = 18

// const gnbItem = document.querySelectorAll("#gnb .list > li");
// //document.querySelectorAll(찾는거) // 배열처럼 생긴 nodeList를 리턴한다.
// const header = document.querySelector("#header");
// console.log(gnbItem);
// console.log(gnbItem.length);
// for (let i = 0; i < gnbItem.length; i++) {
//   gnbItem[i].addEventListener("mouseenter", function () {
//     header.classList.add("open");
//   });
//   gnbItem[i].addEventListener("mouseleave", function () {
//     header.classList.remove("open");
//   });
// }

gsap.from("#mainVisual .slogan .main .char", {
  opacity: 0,
  y: -150,
  ease: "bounce",
  duration: 2,
  stagger: 0.1,
});
gsap.from("#mainVisual .slogan .sub .char", {
  opacity: 0,
  y: -150,
  ease: "bounce",
  duration: 2,
  delay: 2,
  stagger: 0.1,
});

/*
const iq = 182;
let height = 180;
height = height + 5; // 대입연산자...
let 나의키 = 180; //특수문자는 두개만 _ , $ 허용한다. 띄어쓰기 안된다. 숫자는 뒤에만 쓸 수 있다. 예약어는 안됨.
console.log(나의키);
console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 3); // 실수 나누기...(중학생 나누기)
console.log(10 % 3); // 마너지 구하기...(토등학생 나누기)
//Number, Stringm, Boolean
let isOk = false;
//문 statement(조건, 반복)   expression
if (isOk) {
  console.log("나는 참이어서 출력됩니다.");
}
*/

const gnbList = $("#gnb .list > li");
const header = $("#header");

// //fulldown 메뉴
// gnbList.on("mouseenter", function () {
//   header.addClass("open");

// });
// gnbList.on("mouseenter", function () {
//   header.removeClass("open");
// });

gnbList.on("mouseenter", function () {
  const selectedDepth02 = $(this).find(".depth02");
  selectedDepth02.slideDown(200);
});
gnbList.on("mouseleave", function () {
  const selectedDepth02 = $(this).find(".depth02");
  selectedDepth02.slideUp(100);
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

const tabBox = $(".tabBox");
const tabMenu = tabBox.find(".tabMenu > ul > li");
const tabContents = tabBox.find(".tabContents > ul > li");
tabMenu.on("click", function () {
  $(this).addClass("on");
  const siblings = $(this).siblings("li").removeClass("on");
  tabContents.hide();
  tabContents.eq($(this).index()).show();
  console.log($(this).index());
});

const InbItem = $("#Inb .contents .item");
InbItem.on("mouseenter", function () {
  const selectedUL = $(this).find("ul");
  selectedUL.stop().slideDown(200);
});
InbItem.on("mouseleave", function () {
  const selectedUL = $(this).find("ul");
  selectedUL.stop().slideUp(100);
});

const popup = $(".popup");
const btnOneday = popup.find(".oneday");
const btnclose = popup.find(".close");
btnOneday.on("click", function () {
  gsap.to(".popup", {
    duration: 1,
    top: "-100%",
    ease: "back.in",
    onComplete: function () {
      popup.remove();
    },
  });
});

btnclose.on("click", function () {
  gsap.to(".popup", {
    duration: 1,
    top: "-100%",
    ease: "back.in",
    onComplete: function () {
      popup.remove();
    },
  });
});
