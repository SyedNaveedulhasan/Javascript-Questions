function getAdults(people) {
    return people.filter(person => person.age >= 18);
}

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 30 },
    { name: 'Diana', age: 16 }
];

const adults = getAdults(people);
console.log(adults);
