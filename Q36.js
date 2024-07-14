const numbers = [-2, 4, 7, -3, 9, 0, -1, 5];

const averagePositive = numbers
    .filter(num => num > 0)
    .reduce((acc, num, index, arr) => acc + num / arr.length, 0); 

console.log(averagePositive.toFixed(2)); 
