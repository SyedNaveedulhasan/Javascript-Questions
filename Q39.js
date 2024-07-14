const arrays = [[1, 2], [3, 4], [5, 6]];

const flattenedArray = arrays.flat();

const sum = flattenedArray.reduce((acc, num) => acc + num, 0); 

console.log(sum); 