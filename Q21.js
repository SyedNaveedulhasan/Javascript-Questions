const student = {
    name: 'Alice',
    age: 20,
    grades: [85, 90, 75, 95],

    calculateAverage: function() {
        const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        return sum / this.grades.length;
    }
};

const averageGrade = student.calculateAverage();
console.log(`Average grade of ${student.name}: ${averageGrade}`);
