const strings = ['apple', 'banana', 'orange', 'kiwi', 'grape'];

const filteredAndCapitalized = strings
    .filter(str => str.length >= 5)
    .map(str => str.toUpperCase());

console.log(filteredAndCapitalized);
