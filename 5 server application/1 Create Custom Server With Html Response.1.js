var http = require('http');

//we are creating our own server
var server = http.createServer(function(req,res){
    if(req.url == '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(`
            <html>
                <head>
                </head>
                <body>
                    <p>valid url</p>
                </body>
            </html>`);
        res.end();
    }else{
        res.writeHead(404,{'Content-Type':'text/html'});
        //writing html is such a way is very verbose so we use express.js for the same
        res.write(`
            <html>
                <head>
                </head>
                <body>
                    <p>invalid url</p>
                </body>
            </html>`);
        res.end();
    }
});
server.listen(5000);
console.log("node.js server is listening to port 5000");