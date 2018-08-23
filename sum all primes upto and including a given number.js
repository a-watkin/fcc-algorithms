function sumPrimes(num) {
    // primes are only divisible by themselves and one without remainder
    function isPrime(number) {
        for(var i = 2; i < number; i++) {
            if(number % i == 0) {
                return false;
            }
        }
        return true;
    }
        
    var primes = [];

    for(var i = 0; i < num + 1; i++) {
        if(isPrime(i) & i > 1) {
            primes.push(i);
            // console.log(i);
        }
    }

    console.log(primes);


    var sumOfPrimes = 0;
    for(var j = 0; j < primes.length ; j++) {
        sumOfPrimes += primes[j];
    }

    // console.log(counter);
    return sumOfPrimes;

}

console.log(sumPrimes(10));
