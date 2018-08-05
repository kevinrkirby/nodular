const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');
app.use (bodyParser.json());
app.use (bodyParser.urlencoded({ extended: false }));
app.use (express.static(path.join(__dirname , 'frontend/dist/frontend')));
// ### CATCH REFRESH TO INDEX ###
app.all('/*', function(req, res, next) {
  // Just send the index.html for other files to support HTML5Mode
  res.sendFile('frontend/dist/frontend/index.html', { root: __dirname });
});
require('./routes.js')(app.path);
require('./listen.js')(http);
require('./socket.js')(app, io);