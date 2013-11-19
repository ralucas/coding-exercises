var LetterCount = (function () {

    var letterCounter = function (word){
        var strSplit = word.split('');
        var counter = 0;
        var letter = '';
        for(var i = 0; i < strSplit.length; i++){
            letter = strSplit[i];
            for(var j = 0; j < strSplit.length; j++){
                if(letter === strSplit[j]){
                    counter += 1;
                }
            }
        }
        return (counter-strSplit.length);
    };

    var letterCountbyWord = function (str){
        var strSpace = str.split(' ');
        var countArr = [];
        var counter = 0;
        var index;
        for(var i = 0; i < strSpace.length; i++){
            countArr.push(letterCounter(strSpace[i]));
            }
        var max = Math.max.apply(null, countArr);
        if(max === 0){
            return -1;
            }
        else{
            for(var j = 0; j < countArr.length; j++){
                if(max === countArr[j]){
                    index = j;
                    break;
                }
            }
        return strSpace[index];
        }
    };

    return {
        letterCounter : letterCounter,
        letterCountbyWord : letterCountbyWord
    };

})();