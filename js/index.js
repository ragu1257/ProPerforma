$(document).ready(function () {

    $(".accordion h3:first").addClass("active");
    $(".accordion p:not(:first)").hide();

    $(".accordion h3").click(function () {
        $(this).next("p").slideToggle("slow")
            .siblings("p:visible").slideUp("slow");
        $(this).toggleClass("active");
        $(this).siblings("h3").removeClass("active");
    });

});

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.header .container').addClass("sticky");
        $('.navbar-default').addClass("sticky");
        
    }
    else {
        $('.header .container').removeClass("sticky");
        $('.navbar-default').removeClass("sticky");
     
    }
});