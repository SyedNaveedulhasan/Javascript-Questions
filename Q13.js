function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        return `${number} is even`;
    } else {
        return `${number} is odd`;
    }
}

const num = 7;
const result = checkEvenOrOdd(num);
console.log(result);
