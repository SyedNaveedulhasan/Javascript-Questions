const students = [
    { name: 'Alice', score: 80 },
    { name: 'Bob', score: 75 },
    { name: 'Charlie', score: 90 }
];

const modifiedStudents = students.map(student => ({
    name: student.name,
    score: student.score + 5 
}));

console.log(modifiedStudents);
