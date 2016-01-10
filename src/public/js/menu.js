
jQuery("document").ready(function($){

    var body = $('body');
    var bp = $("header").outerHeight(true);

    $(window).scroll(function () {
        if ($(this).scrollTop() > bp ) {
            body.addClass("fixed");
        } else {
            body.removeClass("fixed");
        }
    });

    $(window).resize(function () {
        bp = $("header").outerHeight(true);
    });

});

