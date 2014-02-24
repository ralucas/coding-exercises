$(function() {

    var wait = function wait(timeout) {
        var deferred = $.Deferred();
        setTimeout(deferred.resolve, timeout);
        return deferred.promise();
    };

    var one = function() {
        console.log('Number 1');
    };

    var two = function() {
        console.log('Number TWO');
    };

    wait(1000)
        .then(one)
        .then(two)
        .done(function() {
            console.log('Timeout Fired!');
    });

});