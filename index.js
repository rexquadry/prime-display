const FIRST_PRIME = 2;

const isPrime = (number) => {
    if(typeof number != "number")
        return false;
    try {
        for (let i = FIRST_PRIME; i < number; i++) {
            if(number % i === 0){
                return false;
            }
        }
        return true;
    } catch (error) {
        return false;
    }
}

const generatePrimeNumbers = (amount = 10) => {
    let arrRange = [];
    const primeNumbers = [];
    for (let i = FIRST_PRIME; i > 0; i++) {

        if(arrRange.length >= parseInt(amount))
            break;
            
        if(isPrime(i))
            arrRange.push(i);
    }
    return arrRange;
}

