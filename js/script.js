var clicked = false;
var boxClicked = false;

function clickBurger() {
  clicked = true;
  $("nav").addClass("navbar-expand", 100);
  $("#topbun").addClass("top-hover", 100).addClass("top-clicked", 100);
  $("#cheese").addClass("cheese-hover", 100).addClass("cheese-clicked", 100);
  $("#meat").addClass("meat-hover", 100).addClass("meat-clicked", 100);
  $("#cheese2").addClass("cheese-hover", 100).addClass("cheese2-clicked", 100);
  $("#meat2").addClass("meat-hover", 100).addClass("meat2-clicked", 100);
  $("#bottombun").addClass("bottom-hover", 100).addClass("bottom-clicked", 100);
  $(".link-text").show();
  $("#topbun-text").removeClass("link-text").addClass("topbun-text-expand", 100);
  $("#cheese-text").removeClass("link-text").addClass("cheese-text-expand", 100);
  $("#meat-text").removeClass("link-text").addClass("meat-text-expand", 100);
  $("#cheese2-text").removeClass("link-text").addClass("cheese2-text-expand", 100);
  $("div.social").fadeIn(1200);
  $("div.burgermonochrome>.link-text>a").show(100);
}; //close clickBurger

function unClickBurger() {
  clicked = false;
  $("#topbun-text").removeClass("topbun-text-expand").addClass("link-text");
  $("#cheese-text").removeClass("cheese-text-expand").addClass("link-text");
  $("#meat-text").removeClass("meat-text-expand").addClass("link-text");
  $("#cheese2-text").removeClass("cheese2-text-expand").addClass("link-text");
  $(".link-text").hide();
  $("div.social").hide();
  $("#topbun").removeClass("top-clicked");
  $("#cheese").removeClass("cheese-clicked");
  $("#meat").removeClass("meat-clicked");
  $("#cheese2").removeClass("cheese2-clicked");
  $("#meat2").removeClass("meat2-clicked");
  $("#bottombun").removeClass("bottom-clicked");    
  $("nav").removeClass("navbar-expand");

};

function clickBox() {
  $('div.img-box-info').slideDown(300);
  boxClicked = true;
};
function unclickBox() {
  $('div.img-box-info').slideUp(200);
  boxClicked = false;
};

$(function(){   //document ready 

  $(".navbar-toggle").on("click", function () {
    $(this).toggleClass("active");
  });
  $(".burgermonochrome").click(function(){  //if statement for clicking
    if(clicked == false) {
      clickBurger();
    } else {
      unClickBurger();
    };
  });

// hover event for highlighting burger menu
  $(".burgermonochrome, .burger, .link-text").hover(function() { //mouse on
    $("#topbun").addClass("top-hover", 200);
    $("#cheese, #cheese2").addClass("cheese-hover", 200);
    $("#meat, #meat2").addClass("meat-hover", 200);
    $("#bottombun").addClass("bottom-hover", 200);
  }, 
  function() {  // mouse off 
    $("#topbun").removeClass("top-hover");
    $("#cheese, #cheese2").removeClass("cheese-hover");
    $("#meat, #meat2").removeClass("meat-hover");
    $("#bottombun").removeClass("bottom-hover");
  }
  );

//collapse menu on click of other elements
$("p, .navbar-expand, h1, .mainbody").click(function() { 
 $("#topbun-text").removeClass("topbun-text-expand").addClass("link-text");
 $("#cheese-text").removeClass("cheese-text-expand").addClass("link-text");
 $("#meat-text").removeClass("meat-text-expand").addClass("link-text");
 $("#cheese2-text").removeClass("cheese2-text-expand").addClass("link-text");
 $(".link-text").hide();
 $("div.social").hide();
 $("#topbun").removeClass("top-clicked");
 $("#cheese").removeClass("cheese-clicked");
 $("#meat").removeClass("meat-clicked");
 $("#cheese2").removeClass("cheese2-clicked");
 $("#meat2").removeClass("meat2-clicked");
 $("#bottombun").removeClass("bottom-clicked");    
 $("nav").removeClass("navbar-expand");
});

  // for mobile - same function on click
  $(".img-box").click(function(e){  //if statement for clicking
    e.preventDefault();
    if(boxClicked == false) {
      clickBox();
    } else {
      unclickBox();
    };
  });

// prevent .img-box click event from firing when you click the .insideLink
$(".insideLink").click(function(event) {
  event.stopImmediatePropagation();
});


}); //end document ready function

