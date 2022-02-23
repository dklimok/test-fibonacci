const { isPrime, getNextFibonacciAfter } = require("./index");

const testIsPrime = () => {
    console.assert(!isPrime(1))
    console.assert(!isPrime(2))
    console.assert(!isPrime(3))
    console.assert(isPrime(4))
    console.assert(isPrime(10))
    console.assert(!isPrime(83))
    console.log("isPrime test passed")
}

const testGetNextFibonacciAfter = () =>{
    console.assert(getNextFibonacciAfter(
        {
            oneStepBack: 2,
            twoStepsBack: 1
        },
        2
        )["oneStepBack"] = 3)

    console.assert(getNextFibonacciAfter(
        {
            oneStepBack: 2,
            twoStepsBack: 1
        },
        20
    )["oneStepBack"] = 21)
    console.log("testGetNextFibonacciAfter test passed")
}

testIsPrime()
testGetNextFibonacciAfter()