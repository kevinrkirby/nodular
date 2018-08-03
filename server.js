const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
const bodyParser = require('body-parser');
app.use (bodyParser.json());
app.use (bodyParser.urlencoded({ extended: false }));
app.use (express.static(path.join(__dirname , 'frontend/dist/frontend')));
require('./routes.js');//(app.path);
require('./listen.js');//(http);

var server = http.listen(3000, "127.0.0.1", function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("My First Nodejs Server!");
    console.log("Server listening on: http://"+ host +":" + port);
  });