var Q = require('q');

var deferred1 = Q.defer();
var deferred2 = Q.defer();

var all = function(promise1, promise2) {
    var counter = 0;
    if (counter === 2) {
        deferred.promise1.then(    
