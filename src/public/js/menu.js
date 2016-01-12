

jQuery("document").ready(function($){

    var body = $('body');
    var bp = $("header").outerHeight(true);


    $("#menu a").click( function( e ){

        e.preventDefault();
        var y, target = this.href.split("#")[1];

        if ( target === "home"){
            y=0;
        } else {

            y = $( "#" + target ).offset().top-60;

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

