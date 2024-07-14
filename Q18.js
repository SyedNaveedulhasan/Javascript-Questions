const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};

for (let key in person) {
    console.log(key + ': ' + person[key]);
}

const iterableArray = ['a', 'b', 'c'];

for (let value of iterableArray) {
    console.log(value);
}
