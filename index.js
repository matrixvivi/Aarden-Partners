let visibilityIds = ["#counters_1", "#counters_2", "#counters_3"];

// default counter class

let counterClass = ".counter";

// default animation speed

let defaultSpeed = 3000;

$(document).ready(function() {
  $(".menu-btn").click(function() {
    $(".menu-btn").toggleClass("Diam");
    $(".menu-panel").toggleClass("showPanel");
  });
});
