var express = require("express");
var app = express();
var path = require("path");
app.use(express.static(__dirname + '/web'));

//app.get('/', function (req, res){
//	res.sendFile(path.join(__dirname + '/web/index.html'));	
//});

app.listen(3000);

console.log("running at 3000");
