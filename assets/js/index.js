const card1_open = document.getElementById("card1-open");
const card1_close = document.getElementById("card1-close");
const card2_open = document.getElementById("card2-open");
const card2_close = document.getElementById("card2-close");
const card3_open = document.getElementById("card3-open");
const card3_close = document.getElementById("card3-close");
const card4_open = document.getElementById("card4-open");
const card4_close = document.getElementById("card4-close");

const fadeDuration = 100; // Adjust this value to control the fade-in duration in milliseconds

function hideAllCards() {
  hideCard(card1_open, card1_close);
  hideCard(card2_open, card2_close);
  hideCard(card3_open, card3_close);
  hideCard(card4_open, card4_close);
}

function hideCard(open, close) {
  close.style.opacity = "1";
  open.style.opacity = "0";
  close.style.display = "block";
  open.style.display = "none";
}

function fadeInCard(open, close) {
  let opacity = 0;
  close.style.display = "block";
  const interval = fadeDuration / 5;

  const fadeInterval = setInterval(() => {
    opacity += 0.1;
    close.style.opacity = (1 - opacity).toString();
    open.style.opacity = opacity.toString();

    if (opacity >= 1) {
      clearInterval(fadeInterval);
      open.style.display = "block";
      close.style.display = "none";
    }
  }, interval);
}

function myFunctionCard1() {
  hideAllCards();
  fadeInCard(card1_open, card1_close);
}

function myFunctionCard2() {
  hideAllCards();
  fadeInCard(card2_open, card2_close);
}

function myFunctionCard3() {
  hideAllCards();
  fadeInCard(card3_open, card3_close);
}

function myFunctionCard4() {
  hideAllCards();
  fadeInCard(card4_open, card4_close);
}



/*Tabs */

const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");
const tabs_one = document.querySelectorAll("[data-tab-value-one]");
const tabs_two = document.querySelectorAll("[data-tab-value-two]");
const tabs_three = document.querySelectorAll("[data-tab-value-three]");
const tabs_four = document.querySelectorAll("[data-tab-value-four]");
const tabInfos_one = document.querySelectorAll("[data-tab-info-one]");
const tabInfos_two = document.querySelectorAll("[data-tab-info-two]");
const tabInfos_three = document.querySelectorAll("[data-tab-info-three]");
const tabInfos_four = document.querySelectorAll("[data-tab-info-four]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    target.classList.add("active");
  });
});
tabs_one.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabValueOne);
    tabInfos_one.forEach((tabContent) => {
      tabContent.classList.remove("active-one");
    });
    tabs_one.forEach((tab) => {
      tab.classList.remove("active-one");
    });
    tab.classList.add("active-one");
    target.classList.add("active-one");
  });
});
tabs_two.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabValueTwo);
    tabInfos_two.forEach((tabContent) => {
      tabContent.classList.remove("active-two");
    });
    tabs_two.forEach((tab) => {
      tab.classList.remove("active-two");
    });
    tab.classList.add("active-two");
    target.classList.add("active-two");
  });
});
tabs_three.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabValueThree);
    tabInfos_three.forEach((tabContent) => {
      tabContent.classList.remove("active-three");
    });
    tabs_three.forEach((tab) => {
      tab.classList.remove("active-three");
    });
    tab.classList.add("active-three");
    target.classList.add("active-three");
  });
});
tabs_four.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabValueFour);
    tabInfos_four.forEach((tabContent) => {
      tabContent.classList.remove("active-four");
    });
    tabs_four.forEach((tab) => {
      tab.classList.remove("active-four");
    });
    tab.classList.add("active-four");
    target.classList.add("active-four");
  });
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
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

/* Presales button */
// let off = document.getElementById("off");
// let on = document.getElementById("on");
// let radio = document.querySelector(".c-radio");

// off.addEventListener("click", () => {
//   radio.classList.add("off");
// });

// on.addEventListener("click", () => {
//   radio.classList.remove("off");
// });
var button = document.getElementById("button-container");
var email = document.getElementById("c-fail");
var phone = document.getElementById("c-braincert");
var buttonTrack = document.getElementById("my-button");
var screen2 = window.matchMedia("(min-width: 768px)");
var screen3 = window.matchMedia("(min-width: 1024px)");
var where = document.getElementById("for-button");

var buttonState = true;

button.addEventListener("click", function () {
  if (buttonState) {
    document.getElementById("my-button").style.transform = "translateX(150px)";
    if (screen2.matches) {
      document.getElementById("my-button").style.transform =
        "translateX(172px)";
    }
    buttonState = false;
    email.innerText = "With Braincert";
    phone.innerText = "Without Braincert";
    phone.style.transform = "translateX(-140px)";
    if (screen2.matches) {
      phone.style.transform = "translateX(-172px)";
    }
    where.value = "Phone";
    buttonTrack.style.borderRadius = "0px 50px 50px 0px";
  } else {
    document.getElementById("my-button").style.transform = "translateX(0px)";
    buttonState = true;
    email.innerText = "Without Braincert";
    phone.innerText = "With Braincert";
    phone.style.transform = "translateX(0px)";
    where.value = "Email";
    buttonTrack.style.borderRadius = "50px 0px 0px 50px";
  }
});

let toggle = document.querySelector("#c-toggle-switch");

toggle.addEventListener("click", (e) => {
  console.log("okay");


  let toggle3 = document.querySelector("#c-toggle-3");
  let toggle4 = document.querySelector("#c-toggle-4");
  if (
    toggle3.classList.contains("c-toggle-display-block") &&
    toggle4.classList.contains("c-toggle-display-none")
  ) {
    console.log("4");
    toggle3.classList.remove("c-toggle-display-block");
    toggle3.classList.add("c-toggle-display-none");
    toggle4.classList.remove("c-toggle-display-none");
    toggle4.classList.add("c-toggle-display-block");
  } else if (
    toggle3.classList.contains("c-toggle-display-none") &&
    toggle4.classList.contains("c-toggle-display-block")
  ) {
    console.log("5");
    toggle3.classList.remove("c-toggle-display-none");
    toggle3.classList.add("c-toggle-display-block");
    toggle4.classList.remove("c-toggle-display-block");
    toggle4.classList.add("c-toggle-display-none");
  } else {
    e.preventDefault();
  }
});

