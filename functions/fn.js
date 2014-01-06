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

// Converts array of keys and values to object
// -------------------------------------------
// Array input should be even
//
// Example:
// ```
// var myArray = [ "foo", "foo@bar.com", "bar", "bar@foo.com"];
// arrayToObj(myArray);
// //outputs {foo: "foo@bar.com", bar: "bar@foo.com"};
// ```
var arrayToObj = function(arr) {
    var obj = {};
    for(var i = 0; i < arr.length; i += 2) {
        obj[arr[i]] = arr[i+1];
    }
    return obj;
};

// Checks keys for a specific singular search string and outputs value
// -------------------------------------------------------------------
// Example:
// ```
// var myObj = {foo: "foo@bar.com", barx: "bar@foo.com"};
// checkKeys(myObj, 'x');
// //outputs ["bar@foo.com"];
// ```
var checkKeys = function(obj, value) {
    var output = [];
    for(var key in obj) {
        if(key.split('').indexOf(value) !== -1) {
            output.push(obj[key]);
        }
    }
    return output;
};