var express = require("express");
var app = express();
var path = require("path");
app.use(express.static(__dirname + '/Learn_Template'));

//app.get('/', function (req, res){
//	res.sendFile(path.join(__dirname + '/web/index.html'));	
//});

app.listen(8080);

console.log("running at 3000");
