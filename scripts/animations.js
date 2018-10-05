$(document).ready(function(){

  // Toggle by hover
  $(".animation").mouseenter(function(){
    $(this).addClass("on");
  }).mouseleave(function(){
    $(this).removeClass("on");
    $(this).children().stop();
  });
});
