const numbers = [1, 2, 3, 4, 5];


console.log('Using forEach:');
numbers.forEach(num => {
    console.log(num * 2); 
});


console.log('\nUsing map:');
const doubledNumbers = numbers.map(num => num * 2); 
console.log(doubledNumbers); 
