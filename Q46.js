const fruits = ['apple', 'banana', 'grape', 'orange', 'kiwi'];


const result = fruits
    .filter(fruit => fruit.length > 5) 
    .map(fruit => fruit.toUpperCase()) 
    .reduce((accumulator, fruit) => accumulator + '-' + fruit); 

console.log(result); 
