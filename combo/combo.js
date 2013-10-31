var getMaxOfArray = function (arr) {
    return Math.max.apply(null, arr);
};

var takeOut = function(arr, e){
  for(var i = 0; i < arr.length; i++){
    if(arr[i] === e){
        arr.splice(i, 1);
    }
  }
  return arr;
};

var shuffle = function(arr){
    var x = arr.splice(Math.random()*arr.length, 1);
    arr.push(x[0]);
    return arr;
};

var totalCombos = function(arr){
    var len = arr.length;
    var total = 1;
        while(len >= 1){
            total = total * len;
            len--;
        }
    return total;
};

var callCounter = 0;

var testArr = function(arr, comp){
    var total = comp;

    var combos = totalCombos(arr);
    
    for(var i = 0; i < arr.length; i++){
        if((total -= arr[i]) === 0){
            console.log('TRUE');
            return true;
        }
    }
    if(total < 0 && callCounter < combos){
        callCounter += 1;
        var newArr = shuffle(arr);
        testArr(newArr, g);
    }
    else{
        return false;
    }
};

var g = getMaxOfArray(myArr);
var aArr = takeOut(myArr, g);
testArr(aArr, g);