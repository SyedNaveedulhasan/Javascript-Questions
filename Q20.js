function outerFunction() {
    const message = 'Hello, ';

    function innerFunction(name) {
        return message + name;
    }

    return innerFunction;
}

const greet = outerFunction();
const messageWithGreeting = greet('John');
console.log(messageWithGreeting);
