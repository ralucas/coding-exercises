var meanMode = function(){
    
    var average = function(arr){
        var total = 0;
        var len = arr.length
        for(var i = 0; i < arr.length; i++){
            total += arr[i];
        }
        var avg = total/len;
        return avg;
    };
    
    var mode = function(arr){
        var len = arr.length;
        var half = Math.floor(len/2);
        var result = arr[half];
        return result;
    };
    
    var answer = function(arr){
        var md = mode(arr);
        var ave = average(arr);
        console.log('md', md);
        console.log('avg', ave);
        if(ave === md){
            return 1;
        }
        else{
            return 0;
        }
    };
    
    return {
        answer: answer
    }
    
}();
