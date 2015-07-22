var fib = function(n) {
    var i = 1, a = 1, b = 1, c = 0;
    
    for (i; i < n; i += 1) {
        a = b + c;
        c = b;
        b = a;
        console.log(a);
    }
};
