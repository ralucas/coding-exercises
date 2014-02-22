var http = require('http'),
    path = require('path'),
    Q = require('q');

// sets up hosts
var localhost = '127.0.0.1',
    port = process.env.PORT || 3000;

var defer = Q.defer();


// sets up server
var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello');
});

server.listen(port, localhost, function(){
  console.log('Server listening on port ' + port);
});
