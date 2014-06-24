// Code Eval exercise: Longest Lines
var fs  = require("fs");

var newArr = [];

var long = function(item) {
    var len = item.toString().trim().length;
    var obj = {};
    obj.item = item;
    obj.len = len;
    newArr.push(obj);
};

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        long(line);
    }
});

var len = newArr.length;
var i = 0;

newArr.sort(function(a, b) {
    return b.len - a.len;
});

for(i; i < len; i+=1) {
    console.log(newArr[i].item);
}