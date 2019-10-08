var express = require('express');
var app = express();//setting middleware
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.get('/',function(req,res){
    res.sendFile('D:\\development\\Angular\\5 server application\\5 Post method.html');
});
app.post('/submit-student-data',function(req,res){
    var name=req.body.firstName + ''  + req.body.lastName;
    res.send(`name : ${name} submitted successfully!!`);
});
app.listen(5000,function(){
    console.log('node server is running');
});