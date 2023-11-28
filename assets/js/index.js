var swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 1,
  autoplay: true,
  spaceBetween: 0,
  pagination: false,
  delay: 100,
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    "@0.75": {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },
});

const newBtn = document.querySelector(".btn");
let darkMode = localStorage.getItem("darkMode");

const dark = () => {
  document.body.classList.add("dark");
  localStorage.setItem("darkMode", "active");
};

const light = () => {
  document.body.classList.remove("dark");
  localStorage.setItem("darkMode", null);
};

if (darkMode === "active") {
  dark();
}

const changeMode = () => {
  let darkMode = localStorage.getItem("darkMode");

  if (darkMode === "active") {
    light();
  } else {
    dark();
  }
  console.log("salam");
};

newBtn.addEventListener("click", changeMode);

const topToBtn = document.querySelector(".to-top-btn");

function scrollToTop() {
  window.scrollTo(0, 0);
}

topToBtn.addEventListener("click", scrollToTop);

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    topToBtn.classList.add("active");
  } else {
    topToBtn.classList.remove("active");
  }
});

// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: false,
//     },
// });

$(document).ready(function () {
  setTimeout(function () {
    $("body").removeClass("loading");
    $(".preloader").fadeOut();
  }, 1700);
  $("body").addClass("loading");
});

// Wrap every letter in a span
var textWrapper = document.querySelector(".ml12");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml12 .letter",
    translateX: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i,
  })
  .add({
    targets: ".ml12 .letter",
    translateX: [0, -30],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i,
  });

document.onreadystatechange = function () {
  let lastScrollPosition = 0;
  const navbar = document.querySelector("header");
  window.addEventListener("scroll", function (e) {
    lastScrollPosition = window.scrollY;

    if (lastScrollPosition > 100) navbar.classList.add("navbar-dark");
    else navbar.classList.remove("navbar-dark");
  });
};

var runAlready;
var counting;
