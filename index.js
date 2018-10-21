var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");

});

server.set('port', (process.env.PORT || 3000));
server.listen(server.get('port'));

console.log("Server running at http://localhost:%d", server.get('port'));
