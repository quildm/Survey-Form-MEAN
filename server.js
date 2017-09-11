
var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


app.get('/', function(request, response) {
    response.render('index.ejs');
  
    console.log("loaded index.ejs");
  })

app.post('/result', function(request, response) {


  response.render('results', {result: request.body});
})


app.listen(3000, function() {
 console.log("listening on port 3000!");
})