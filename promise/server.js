var http = require('http'),
    path = require('path'),
    express = require('express'),
    Q = require('q'),
    app = express();

// sets up hosts
var localhost = '127.0.0.1',
    port = process.env.PORT || 3011,
    server = http.createServer(app);

var deferred = Q.defer();
setTimeout(function(){
    deferred.resolve();
    deferred.promise.then(function() {
        console.log('resolved');
    });
}, 3000);

// listens to server
server.listen(port, function() {
  console.log('Server listening on port ' + port);
});
