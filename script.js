var fskills = $("#f-skills");
var bskills = $("#b-skills");
var dskills = $("#d-skills");
var oskills = $("#o-skills");


$(document).ready(function() {
    $("#me").css("visibility", "hidden");
    $("#main-section").css("background", "none");
    $("#home").addClass("current");
    $(".nav-list a:not(#home)").removeClass("current");

    const f = document.getElementById("firstDot");
    f.addEventListener("animationend",()=>{
        $("#main-section").css("background", "url('/img/background.jpg') no-repeat center/cover");
        $(".main-content").css("padding", "50vh 0 0 0");
        $(".dot").css("visibility", "hidden");
        $("#me").css("visibility", "visible");
        $(window).ready(function() {
            var width = $(window).width();
            if (width < 1500){
                $("#main-section").css("background", "url('/img/background.jpg') no-repeat center/cover");
            }
            if (width < 768){
                $("#main-section").css("background", "url('/img/backgroundSmall.jpg') no-repeat center/cover");
                $(".main-content").css("padding", "40vh 0 0 0");
                $(".works").append("<hr/>");
            }
        });
        
    }); 
     
    $(window).scroll(function() { 
    const scrollTop = $(window).scrollTop();
    
    let offsetHome = $("#main-section").offset();
    if(Math.trunc(scrollTop) >= Math.trunc(offsetHome.top) -400){
        $("#home").addClass("current");
        $(".nav-list a:not(#home)").removeClass("current");
    }

    let offsetAbout = $("#about-section").offset();
    if(Math.trunc(scrollTop) >= Math.trunc(offsetAbout.top) -400){
        $("#about").addClass("current");
        $(".nav-list a:not(#about)").removeClass("current");
        $("#about-section > h3").addClass("move");   
    }

    let offsetSkills = $("#skills-section").offset();
    if(Math.trunc(scrollTop) >= Math.trunc(offsetSkills.top) -400){
        $("#skills").addClass("current");
        $(".nav-list a:not(#skills)").removeClass("current");
        $("#skills-section > h3").addClass("move");   
    }

    let offsetProjects = $("#projects-section").offset();
    if(Math.trunc(scrollTop) >= Math.trunc(offsetProjects.top) -400){
        $("#projects").addClass("current");
        $(".nav-list a:not(#projects)").removeClass("current");
        $("#projects-section > h3").addClass("move");   
    }

    let offsetContact = $("#contact-section").offset();
    if(Math.trunc(scrollTop) >= Math.trunc(offsetContact.top) -400){
        $("#contact").addClass("current");
        $(".nav-list a:not(#contact)").removeClass("current");   
    }
});
});



$('.nav-list a').on('click' , function(event){
  if(this.hash !== ''){
      event.preventDefault();

      const hash = this.hash;

      $('html,body').animate(
          {
              scrollTop: $(hash).offset().top - 100
          },
          1200
      );

      $(hash).find("h3").addClass("move");
  }
});


// https://www.w3schools.com/howto/howto_js_typewriter.asp
var i = 0;
var w1 = 'I am a Toronto based MERN stack developer'; 
var w2 = "I like to make complex things look simple"
var speed = 100;

function typeWriter() {
 if (i < w1.length || i < w2.length) {
 document.getElementById("writer1").innerHTML += w1.charAt(i);
 document.getElementById("writer2").innerHTML += w2.charAt(i);
 i++;
 setTimeout(typeWriter, speed);
 }
};



fskills.click(function(){
    var classAttr = fskills.attr("class");
    if(classAttr === "fas fa-plus"){
        fskills.removeClass("fas fa-plus");
        fskills.addClass("fas fa-minus");
        $("#f-skill1").fadeIn(1000);
        $("#f-skill2").fadeIn(2000);
        $("#f-skill3").fadeIn(3000);
        $("#f-skill4").fadeIn(4000);
        $("#f-skill5").fadeIn(5000);
        $("#f-skill6").fadeIn(6000);
        $("#f-skill7").fadeIn(7000);
    }

    if(classAttr === "fas fa-minus"){
        fskills.removeClass("fas fa-minus");
        fskills.addClass("fas fa-plus");
        $("#f-skill1").fadeOut(7000);
        $("#f-skill2").fadeOut(6000);
        $("#f-skill3").fadeOut(5000);
        $("#f-skill4").fadeOut(4000);
        $("#f-skill5").fadeOut(3000);
        $("#f-skill6").fadeOut(2000);
        $("#f-skill7").fadeOut(1000);
    }
});


bskills.click(function(){
    var classAttr = bskills.attr("class");
    if(classAttr === "fas fa-plus"){
        bskills.removeClass("fas fa-plus");
        bskills.addClass("fas fa-minus");
        $("#b-skill1").fadeIn(1000);
        $("#b-skill2").fadeIn(2000);
        $("#b-skill3").fadeIn(3000);
        $("#b-skill4").fadeIn(4000);
    }

    if(classAttr === "fas fa-minus"){
        bskills.removeClass("fas fa-minus");
        bskills.addClass("fas fa-plus");
        $("#b-skill1").fadeOut(4000);
        $("#b-skill2").fadeOut(3000);
        $("#b-skill3").fadeOut(2000);
        $("#b-skill4").fadeOut(1000);
    }
});


dskills.click(function(){
    var classAttr = dskills.attr("class");
    if(classAttr === "fas fa-plus"){
        dskills.removeClass("fas fa-plus");
        dskills.addClass("fas fa-minus");
        $("#d-skill1").fadeIn(1000);
        $("#d-skill2").fadeIn(2000);
        $("#d-skill3").fadeIn(3000);
    }
    if(classAttr === "fas fa-minus"){
        dskills.removeClass("fas fa-minus");
        dskills.addClass("fas fa-plus");
        $("#d-skill1").fadeOut(3000);
        $("#d-skill2").fadeOut(2000);
        $("#d-skill3").fadeOut(1000);
    }
});

oskills.click(function(){
    var classAttr = oskills.attr("class");
    if(classAttr === "fas fa-plus"){
        oskills.removeClass("fas fa-plus");
        oskills.addClass("fas fa-minus");
        $("#o-skill1").fadeIn(1000);
        $("#o-skill2").fadeIn(2000);
        $("#o-skill3").fadeIn(3000);
        $("#o-skill4").fadeIn(4000);
    }

    if(classAttr === "fas fa-minus"){
        oskills.removeClass("fas fa-minus");
        oskills.addClass("fas fa-plus");
        $("#o-skill1").fadeOut(4000);
        $("#o-skill2").fadeOut(3000);
        $("#o-skill3").fadeOut(2000);
        $("#o-skill4").fadeOut(1000);
    }
});






$(".icon").click(function(){
    $(".nav-list").toggleClass("smallScreen");
    if(($(".nav-list").attr("class")) == "nav-list smallScreen")
    {
        $(".icon").html("<p style='font-size:32px'>&times;</p>");
    }
    else
    $(".icon").html("<i class='fa fa-bars'></i>");

});

$(".nav-list a").not(".icon").click(function(){
    $(".nav-list").removeClass("smallScreen");
    $(".icon").html("<i class='fa fa-bars'></i>");
});



