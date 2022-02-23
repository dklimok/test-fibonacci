const { isPrime, isFibonacci } = require("./index");

const testIsPrime = () => {
    console.assert(!isPrime(1))
    console.assert(!isPrime(2))
    console.assert(!isPrime(3))
    console.assert(isPrime(4))
    console.assert(isPrime(10))
    console.assert(!isPrime(83))
    console.log("isPrime test passed")
}

testIsPrime()