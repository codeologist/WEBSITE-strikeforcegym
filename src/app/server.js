    "use strict";

    var express = require("express");
    var bodyParser = require('body-parser');
    var winston = require('winston');

    function server(){

        winston.profile('server');

        winston.info("STARTING STRIKEFORCE WEBSITE");

        var app = express();

        app.set('view engine', 'jade');
        app.set('views', 'src/views');

        app.use( express.static( process.cwd() + '/public/' ));
        app.use( bodyParser.urlencoded({ extended: false }));
        app.use( bodyParser.json());



        var server = app.listen( process.env.PORT, function () {
            winston.log( "info", "Listening Detail", server.address() );
        });

        winston.profile('server');

        return app;
    }

    module.exports = server;