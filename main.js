"use strict";
//CAPTURE DOM ELEMENTS IN VARIABLES
const container = document.querySelector(".container");
const page = document.querySelector(".page");
const background = document.querySelector(".background");

let bannerInterval;
let bannerIndex = 0;
let pageY;
//INITIALIZE HEADER
page.innerHTML += headerHTML;
page.innerHTML += bannerHTML;
page.innerHTML += taglineHTML;
page.innerHTML += servicesHTML;
page.innerHTML += casesHTML;
page.innerHTML += footerHTML;

const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const banner = document.getElementById("banner");

overlay.innerHTML += navListHTML;

const [topBar, midBar, botBar] = [
  document.getElementById("top-bar"),
  document.getElementById("mid-bar"),
  document.getElementById("bot-bar"),
];

const hamburgerMenu = document.querySelector(".hamburger-menu");

function overlayToggle() {
  console.log("menu clicked");
  const scrolled = window.scrollY;
  if (overlay.classList.contains("overlay-hidden")) {
    clearInterval(bannerInterval);
    document.body.style.overflowY = "hidden";
    overlay.classList.remove("overlay-hidden");
    topBar.style.transform = "rotate(45deg) translate(10px, 9.5px)";
    midBar.style.opacity = "0";
    botBar.style.transform = "rotate(-45deg) translate(10px, -9.5px)";
  } else if (!overlay.classList.contains("overlay-hidden")) {
    startBannerSwitcher();
    document.body.style.overflowY = "visible";
    overlay.classList.add("overlay-hidden");
    topBar.style.transform = "rotate(0deg) translate(0px, 0px)";
    midBar.style.opacity = "1";
    botBar.style.transform = "rotate(0deg) translate(0px, 0px)";
  }
}

function gotoPage(event) {
  console.log(event.target.id);
  overlayToggle();
}

function headerToggle(e) {
  const recapHeader = document.querySelector(".header");
  const scrolled = window.scrollY;
  //   console.log(scrolled);
  if (scrolled <= 0) {
    recapHeader.classList.remove("header-hidden");
    return;
  }
  if (scrolled > pageY) {
    // console.log("down", scrolled, pageY);
    recapHeader.classList.add("header-hidden");
  } else if (scrolled < pageY) {
    // console.log("up", scrolled, pageY);
    recapHeader.classList.remove("header-hidden");
  }
  pageY = scrolled;
}

function startBannerSwitcher() {
  bannerInterval = setInterval(bannerSwitcher, 2000);
}
startBannerSwitcher();

function bannerSwitcher() {
  banner.src = bannerArray[bannerIndex];
  if (bannerIndex < bannerArray.length - 1) {
    bannerIndex++;
  } else {
    bannerIndex = 0;
  }
}

hamburgerMenu.addEventListener("click", overlayToggle);
window.addEventListener("scroll", headerToggle);
