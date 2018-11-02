const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".first");

left.addEventListener("mouseenter", () => {
  container.classList.add("hover-left");
});

left.addEventListener("mouseleave", () => {
  container.classList.remove("hover-left");
});

right.addEventListener("mouseenter", () => {
  container.classList.add("hover-right");
});

right.addEventListener("mouseleave", () => {
  container.classList.remove("hover-right");
});

$(document).ready(function(){
      $(".header_hidden_left").html("India Analysis");
      $(".anchor_hidden_left").attr("href","india analysis.html");
      $(".header_hidden_right").html("State Wise Analysis");
      $(".anchor_hidden_right").attr("href","state analysis.html");
      $(".split.right").css({"background":"url('images/one_state.jpg') center center no-repeat","background-size":"cover"});
      $(".split.left").css({  "background":"url('images/all_states.jpg') center center no-repeat","background-size":"cover"});
});
