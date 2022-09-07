$(document).ready(function() {
  setTimeout(function() {
    $("body").addClass("loaded");
  }, 3000);
});

$(document).ready(function() {
  $(".menu-btn").click(function() {
    $(".menu-btn").toggleClass("Diam");
    $(".menu-panel").toggleClass("showPanel");
  });
});

AOS.init();

import LocomotiveScroll from "https://cdn.skypack.dev/locomotive-scroll";

const scroller = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true
});

let visibilityIds = ["#counters_1", "#counters_2", "#counters_3"];

// default counter class

let counterClass = ".counter";

// default animation speed

let defaultSpeed = 3000;
