var express = require('express');
var app = express();
var fs = require("fs");
const bodyParser = require('body-parser');

// USE method route
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


const toDo = require('./toDo/toDo.js');

// GET method route
app.get('/to-do',  (req, res) => {
	const toDos = toDo.getToDo();
	res.send(toDos);
	console.log("Get toDo")
});

// POST method route
app.post('/to-do', function (req, res) {	
 	const data = req.body;
	const fromDos = toDo.saveToDo(data)
	res.send(fromDos)
	console.log("post toDo")
});



var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("aaExample app listening at http://%s:%s", host, port)
   });
console.log();