var fs  = require("fs"),
    input = [],
    words = [],
    wordArr= [],
    len,
    counter = 0;

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        input.push(line);
        if (line === 'END OF INPUT') {
            wordArr = input;
            wordArr.pop();
            len = wordArr.length;
        }
        words = wordArr.slice(0,len);

        words.forEach(function(word) {
            var len = word.length,
                testWord = '',
                str = word.split('');

            for (var i = 0; i < len; i += 1) {
                var letter = str[i];

                for (var j = 0; j < 26; j += 1) {
                    var alpha = String.fromCharCode(97 + j);
                    str[i] = alpha;
                    testWord = str.join('');

                    if (testWord === line) {
                        counter += 1;
                    }
                    str[i] = letter;
                }
            }
        });
    }
});
console.log(counter);
