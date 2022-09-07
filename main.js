const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true
});

$(document).ready(function() {
  $(".menu-btn").click(function() {
    $(".menu-btn").toggleClass("Diam");
    $(".menu-panel").toggleClass("showPanel");
  });
});
