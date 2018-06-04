$('document').ready(function ($) {

    $('#AboutScroll').click(function() {
        $('html, body').animate({
            scrollTop: $("#about").offset().top - 150
        }, 500);
    })

    $('#ProjectsScroll').click(function () {
        $('html, body').animate({
            scrollTop: $("#projects").offset().top - 53
        }, 500);
    })

});