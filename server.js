var express = require('express');

//create our app
//
var app = express();

//tell it which folder we want to serve
app.use(express.static('public'));

//app.use lets you add functionality to your server

//then start the server
app.listen(3000, function() {
  console.log(`'Go to port
                3000'`);
});
