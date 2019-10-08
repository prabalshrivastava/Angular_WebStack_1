var express = require('express')
var app = express();
//set view engine
app.set('view engine','pug')
app.get('/',function(req,res){
    res.render('1');
})
var server = app.listen(5000,function(){
    console.log('Node Server is Running');
})