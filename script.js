//When DOM/page is fully loaded...
$(document).ready(function () {
    $(window).scroll(function () {
        //if scrolled 300px then add class...
        if ($(this).scrollTop() > 400) {
            $(".navbar").removeClass('bg-transparent');
            $(".navbar").addClass('black');
            $(".nav-link").css("color", "white");
            $(".navbar-brand").css("color", "white");
            $(".fa-bars").css("color", "white");
        } else {
            $(".navbar").removeClass("black");
            $(".navbar").addClass('bg-transparent');
            $(".nav-link").css("color", "black");
            $(".navbar-brand").css("color", "black");
            $(".fa-bars").css("color", "black");
        }
    });   
});



var create = document.querySelector(".create");
var host = document.querySelector(".host");
var maintain = document.querySelector(".maintain");
var changedPic = false;

setInterval(function () {
    if (changedPic) {
        create.setAttribute("src", "images/PS-create2.jpg");
        host.setAttribute("src", "images/PS-Host1.jpg");
        maintain.setAttribute("src", "images/PS-Maintain.jpg");
    } else {
        create.setAttribute("src", "images/PS-create.jpg");
        host.setAttribute("src", "images/PS-Host2.jpg");
        maintain.setAttribute("src", "images/PS-Maintain2.jpg");
    }
    changedPic = !changedPic;
}, 2000);


