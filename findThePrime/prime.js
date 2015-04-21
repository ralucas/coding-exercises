/**
 * Function that takes a number and returns the prime number at that point
 * {number}
 * i.e. What is the 25th prime --- prime(25) --- returns 97;
 **/
function prime(c) {
    var i = 7;
    var count = 3;
    var test = (i - 1) / 2;
    var isPrime = true;
    
    while(i) {
        
        for (j = 3; j < test; j += 2) {
            if (i % j === 0) {
                isPrime = false;
            }
        }
        if (isPrime) {
            count += 1;
            if (count === c) {
                return i;
            }
            i += 2;
            test = (i - 1) / 2;
        } else {
            i += 2;
            test = (i - 1) / 2;
            isPrime = true;
        }
    }
}
