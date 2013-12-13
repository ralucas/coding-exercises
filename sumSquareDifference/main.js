var sumSquareDiff = {

    numArrCreate : function(num, start){
        numberArray = [];
        for(var i = start; i < num; i++){
            numberArray.push(i);
        }
        return numberArray;
    },

    forEach : function(list, action){
        for (var i = 1; i < list.length; i++){
            action(list[i]);
        }
    },

    sumMap : function (arr){
        var sum = 0;
        for(var i = 0; i < arr.length; i++){
            sum += arr[i]*arr[i];
        }
        return sum;
    },

    sqMap : function (arr){
        var sum = 0;
        for(var i = 0; i < arr.length; i++){
            if(arr[i] !== undefined){
                sum += arr[i];
            }
        }
        var tot = sum*sum;
        return tot;
    }

};

var newArr = sumSquareDiff.numArrCreate(101, 1);
var sumSq = sumSquareDiff.sumMap(newArr);
var totSq = sumSquareDiff.sqMap(newArr);

var diff = totSq - sumSq;
console.log('diff', diff);