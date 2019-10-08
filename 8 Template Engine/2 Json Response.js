var http = require('http');

//we are creating our own server
var server = http.createServer(function(req,res){
    if(req.url == '/'){
        res.writeHead(200,{'Content-Type':'application/json'});
        res.write(JSON.stringify({message:'valid url'}));
        res.end();
    }else{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.write(JSON.stringify({message:{errorMessage : 'invalidurl1'}}));
        res.write(JSON.stringify({message:'invalid url'}));
        res.end();
    }
});
server.listen(5000);
console.log("node.js server is listening to port 5000");