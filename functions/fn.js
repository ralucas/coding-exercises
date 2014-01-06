// Creates a multiplication table
// ------------------------------
// Can run in console by running:
// ```
// var logger = multiplicationTable();
// console.log(logger);
// ```
var multiplicationTable = function() {
    var line = '';
    for(var i = 1; i < 10; i++) {
        for(var j = 1; j < 10; j++) {
            line += (i * j) + ' ';
        }
        line += '\n';
    }
    return line;
};