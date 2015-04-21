
var largestProduct = function(num, digits) {
  var i = 0,
      output = 1,
      result = {
        output: 0
      },
      test;

  for (i; i < num.length; i++) {
    var end = i + digits;
    test = num.slice(i, end);
    console.log('test', test);

    if (test.indexOf('0') !==  -1) {
      // move up to the 0
      i = test.indexOf('0') + 1;
    } else {
      for (var j = 0; j < digits; j++) {
        output *= parseInt(test[j]);
      }
    }
    
    if (output > result.output) {
      result = {
        output: output,
        number: test
      };
    }
  }

  return result;

};
