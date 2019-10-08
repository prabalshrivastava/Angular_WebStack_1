var express1 = require('express');
var app = express1();
app.get('/',function(req,res){
    var sql = require('mssql');
    var config = 
    {
        user:'sa',
        password:'Root@123',
        server:'localhost',
        database:'northwind' 
    };
    sql.connect(config,function(err){
        if(err){
            console.log(err);
        }
    });
    var request = new sql.Request();//Object for retrieving the data
    request.query('select * from northwind',function(err,recordset){
        if(err){
            console.log(err);
        }
        res.send(recordset);
    });
});
app.listen(5000);
