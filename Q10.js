function calculateFactorial(number) {
    let factorial = 1;
    let i = 1;
    
    do {
        factorial *= i;
        i++;
    } while (i <= number);
    
    return factorial;
}

const num = 5;
const factorial = calculateFactorial(num);
console.log(factorial);
