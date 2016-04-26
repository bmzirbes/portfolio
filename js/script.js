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
  $("div.social").show();
  $("div.burgermonochrome>.link-text>a").show(100);
  // $("#headerimage").show(200);
}; //close clickBurger

function unClickBurger() {
  clicked = false;
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
  boxClicked = true;
  $('div.img-box-info').slideDown(300);
};
function unclickBox() {
  boxClicked = false;
  $('div.img-box-info').slideUp(200);
};

$(function(){   //document ready 


  $("#about").click(function(){
    $("#about-me").show();
    $("div.social").hide();
    $(".hero-unit").hide();
    $(".title").html("");
  });
  $("#topbun-text").click(function(){ 
    unClickBurger();
    $(".hero-unit").css("background", "url('http://i.imgur.com/MXm1aG8.jpg')").css("background-size", "cover").css("background-repeat", "no-repeat").css("background-position", "center");
    $(".mainbody").css("height", "58%")
    $("#about-me").show();
    $(".title").html("");
  });


  $(".burgermonochrome").click(function(){  //if statement for clicking
    if(clicked == false) {
      clickBurger();
    } else {
      unClickBurger();
    };

  });


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

  $("p, .navbar-expand, h1, .mainbody").click(function() { //collapse menu on click of other elements
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


  $(".img-box").hover(function() { //mouse on
    $(this).find('div.img-box-info').slideDown(300);
  }, 
  function() {  // mouse off 
    $(this).find('div.img-box-info').slideUp(400);
  }
  );
  // for mobile - same function on click
  $(".img-box").click(function(e){  //if statement for clicking
    e.preventDefault();
    if(boxClicked == false) {
      clickBox();
    } else {
      unclickBox();
    };

  });

  // $(".img-box").click(function() {
  //   $(this).find('div.img-box-info').slideDown(300);
  // }); 
  
  // $(".fa-times").click(function() {
  //   $('div.img-box-info').slideUp(200);
  // });
  

}); //end document ready function

