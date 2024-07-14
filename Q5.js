function sumOfPositiveNumbers(arr) {
    return arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);
}

const inputArray = [1, -2, 3, 4, -5];
const sum = sumOfPositiveNumbers(inputArray);
console.log(sum);
