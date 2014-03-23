var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        var arr = line.split(' ');
        arr.sort(function(a, b) {
            return a - b;
        });
        console.log(arr.join(' '));
    }
});