
    "use strict";

    var server = require("./server");


    function Application(){

        var app = server();
        app.get("/", require( "./pages/home" ) );
        app.get("/canterbury", require( "./pages/canterbury" ) );
        app.get("/c", require( "./pages/canterbury" ) );

        app.get("/auckland", require( "./pages/auckland" ) );
        app.get("/a", require( "./pages/auckland" ) );

        app.get("/linktous", require( "./pages/link" ) );

        app.get("/preview", require( "./pages/home" ) );

    }

    module.exports = Application;
