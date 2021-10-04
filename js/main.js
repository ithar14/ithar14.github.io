//change intro text
var Text = ['Digital Artist ✨', 'web UI developer 🌿', 'physics student ☕']; 
var randNum = Math.round( Math.random() * (Text.length-1) ); 
var i =0
function ChangeText(){
  document.getElementById('txt').innerHTML = Text[i];
  if(i < Text.length-1){
    i++;
  }
  else{
    i = 0;
  }
  setTimeout("ChangeText();",2500);
}
        
ChangeText();
//loader
$(window).on("load",function(){
  $(".loader").fadeOut("slow");
  $(".container").css("visibility", "visible");
});

$(document).ready(function () {
  //  isotope
  var $container = $(".portfolio-container");

  $container.isotope({
    filter: "*",
  });

  $(".portfolio-filter a").click(function () {
    $(".portfolio-filter .active").removeClass("active");
    $(this).addClass("active");

    var selector = $(this).attr("data-filter");
    $container.isotope({
      filter: selector,
      animationOptions: {
        duration: 500,
        animationEngine: "jquery",
      },
    });

    return false;
  });

});

