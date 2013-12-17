var arrayCreate = function(num){
    var output = [];
    for(var i = 2; i <= num; i++ ){
        output.push(i);
    }
    return output;
};

var tester = function(arr){
    var num = 2;
    var i = 0;
    while(i < arr.length){
        if(num % arr[i] === 0){
            if(i === (arr.length-1)){
                return num;
            }
            i++;
        }
        else{
            num++;
            i = 0;
        }
    }
};