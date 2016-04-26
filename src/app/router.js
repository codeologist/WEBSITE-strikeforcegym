    "use strict";

    const server = require("./server");
    const homepage = require( "../controllers/home" );

    function Application(){
        var app = server();
        app.get("/",  homepage );
    }

    module.exports = Application;
