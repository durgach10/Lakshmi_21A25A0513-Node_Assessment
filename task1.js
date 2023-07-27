var http=require('http');
http.createServer(function(req,res){
    res.writeHead(201,{'content-type':'text/html'});
    res.end("Hello,World!");
}).listen(1234);