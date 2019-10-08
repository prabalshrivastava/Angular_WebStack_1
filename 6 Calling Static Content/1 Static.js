var express = require('express');
var app = express();
console.log(__dirname + "\\resources");

app.use(express.static(__dirname + "\\resources"));
var server = app.listen(5000);
