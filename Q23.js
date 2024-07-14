const numbers = [1, 2, 3, 4, 5];

numbers.forEach(number => {
    const message = number % 2 === 0 ? `${number} is even` : `${number} is odd`;
    console.log(message);
});
