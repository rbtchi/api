var express = require("express");
var app = express();

app.get("/", function (req, res, next) {
  res.send("Hello World! !!!!");
});

app.get('/about', function (req, res) {
    res.send('about');
  });

app.get('/demo', function (req, res ) {
res.send('demo');
});

app.listen(8000, function () {
  console.log("API app listening on port 8000!");
});


