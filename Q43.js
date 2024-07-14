const students = [
    { name: 'Alice', score: 80 },
    { name: 'Charlie', score: 90 },
    { name: 'Bob', score: 75 }
];


students.sort((a, b) => a.score - b.score);

console.log(students);


students.sort((a, b) => {
    if (a.name < b.name) {
        return 1; 
    } else if (a.name > b.name) {
        return -1; 
    } else {
        return 0; 
    }
});

console.log(students);
