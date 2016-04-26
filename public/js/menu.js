


jQuery("document").ready(function($){

    var body = $('body');
    var bp = $("header").outerHeight(true);
    var navHeight = 80;//$("nav").outerHeight(true);

    $("#menu a[href*=#]").click( function( e ){

        e.preventDefault();
        var y, target = this.href.split("#")[1];

        if ( target === "home"){
            y=0;
        } else {
            y = $( "#" + target ).offset().top-navHeight;
        }

        $("body").animate( {"scrollTop": y }, 1000 ,"easeInCirc");

    });



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

