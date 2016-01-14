
    "use strict";

    var server = require("./server");


    function Application(){

        var app = server();
        app.get("/", require( "./pages/home" ) );
        app.get("/preview", require( "./pages/home" ) );

    }

    module.exports = Application;
