// SERVER-SIDE JAVASCRIPT

// require express framework and additional modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
    _ = require('underscore');

//tell app to use express
app.use(express.static(__dirname + '/public'));    

// tell app to use bodyParser middleware (for handling data)
app.use(bodyParser.urlencoded({extended: true}));

// pre-seeded data


// API ROUTES

// read new users
app.get("/tip", function (req, res) {
  res.json(tips);
});

//create a new post/ tips
app.post("/tip", function (req, res) {
  var newUser = req.body;
  user.push(newUser)
  res.json(newUser)

});


// set server to localhost:3000
app.listen(3000, function () {
  console.log('server started on localhost:3000');
});


