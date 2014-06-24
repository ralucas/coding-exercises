// Write function

var arrayCheck = function(arr, word) {
    // Randomly concatenate words and test against word
    var test = '';
    for (var i = 0; i < arr.length; i += 1) {
        test += arr[i];
        console.log(test);
        if (word === test) {
            return 'valid';
        } else {
            return 'not valid';
        }
    }
};


var combo = function(arr) {
    var output = [];
    
}