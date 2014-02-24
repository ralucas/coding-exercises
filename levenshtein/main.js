var levenshtein = function(word, comparison) {

    var WORD = word;

    var compareToWord = function(comparison) {
        var len = WORD.length,
            counter = 0,
            testWord = '',
            str = WORD.split('');

        //loop to exchange a letter and then to compare
        for(var i = 0; i < len; i += 1) {
            var letter = str[i];
            for(var j = 0; j < 26; j += 1) {
                var alpha = String.fromCharCode(97 + j);
                str[i] = alpha;
                testWord = str.join('');
                if(testWord === comparison) {
                    counter += 1;
                }
                str[i] = letter;
            }
        }
        return counter;
    };

    return compareToWord(comparison);
};

// Refactor using forEach


var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    var input = [];
    if (line != "") {
        input.push(line);
        //do something here
        //console.log(answer_line);
    }
    var idx = input.indexOf('END OF INPUT');
    var words = input.slice(0,idx);
    var comparisons = input.slice(idx, input.length);
    words.forEach(function(word) {
        var len = word.length,
            counter = 0,
            testWord = '',
            str = word.split('');
        
        comparisons.forEach(function(comparison) {
            //loop to exchange a letter and then to compare
            for(var i = 0; i < len; i += 1) {
                var letter = str[i];
                for(var j = 0; j < 26; j += 1) {
                    var alpha = String.fromCharCode(97 + j);
                    str[i] = alpha;
                    testWord = str.join('');
                    if(testWord === comparison) {
                        counter += 1;
                    }
                    str[i] = letter;
                }
            }
        });
    });
    console.log(counter);
});
