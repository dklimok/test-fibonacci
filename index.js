const isPrime = (num) => {
    for (let i = 2; i <= Math.floor(num/2); i++) {
        if (num % i === 0) {
            return true
        }
    }

    return false
};

module.exports.isPrime = isPrime

const isFibonacci = (num) => {
    if (num <= 1) {
        return 1
    }
  return isFibonacci(num - 1) + isFibonacci(num - 2);
};
module.exports.isFibonacci = isFibonacci

function getNextPrimeFibonacciNumber(number) {
    //todo add imput validator for integer possitive numbers if needed
    let r = 0;
    let l = 1;
    while (true) {
        var fib = isFibonacci(l);
        console.log('fib', fib, number);
        if (fib > number) {
            if (!isPrime(fib)) {
                r = fib;
                break;
                } else {
                    l = l + 1;    
                    console.warn('bumping to ', fib);
                }
            } else {
                l = l + 1;
                console.warn('bumping to', fib);
            }
    }
    console.warn('Next prime fib ', r);
}

getNextPrimeFibonacciNumber(20);
