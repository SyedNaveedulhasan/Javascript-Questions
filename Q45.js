const people = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];


const personById = people.find(person => person.id === 2);

console.log(personById); 


const peopleWithNameLengthGreaterThan5 = people.filter(person => person.name.length > 5);

console.log(peopleWithNameLengthGreaterThan5);

