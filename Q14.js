function findMaxOfThreeNumbers(a, b, c) {
    return a >= b ? (a >= c ? a : c) : (b >= c ? b : c);
}

const num1 = 10;
const num2 = 5;
const num3 = 8;

const maxNumber = findMaxOfThreeNumbers(num1, num2, num3);
console.log(`The maximum of ${num1}, ${num2}, and ${num3} is: ${maxNumber}`);
