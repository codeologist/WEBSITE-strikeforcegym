
jQuery("document").ready(function($){

    var nav = $('#menu');
    var bp = $("header").outerHeight(true);

    $(window).scroll(function () {
        if ($(this).scrollTop() > bp ) {
            nav.addClass("fixed");
            $('#about').css("margin-top","60px")
        } else {
            nav.removeClass("fixed");
            $('#about').css("margin-top","0px")
        }
    });

    $(window).resize(function () {
        bp = $("header").outerHeight(true);
    });

});

