
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
  let toggle3 = document.querySelector("#c-toggle-3");
  let toggle4 = document.querySelector("#c-toggle-4");
  if (
    toggle3.classList.contains("c-toggle-display-block") &&
    toggle4.classList.contains("c-toggle-display-none")
  ) {
    toggle3.classList.remove("c-toggle-display-block");
    toggle3.classList.add("c-toggle-display-none");
    toggle4.classList.remove("c-toggle-display-none");
    toggle4.classList.add("c-toggle-display-block");
  } else if (
    toggle3.classList.contains("c-toggle-display-none") &&
    toggle4.classList.contains("c-toggle-display-block")
  ) {
    toggle3.classList.remove("c-toggle-display-none");
    toggle3.classList.add("c-toggle-display-block");
    toggle4.classList.remove("c-toggle-display-block");
    toggle4.classList.add("c-toggle-display-none");
  } else {
    e.preventDefault();
  }
});

