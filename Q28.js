function calculateTax(income) {
    const taxRate = income <= 50000 ? 0.1 : income <= 100000 ? 0.2 : 0.3;
    return income * taxRate;
}


const income1 = 40000;
const tax1 = calculateTax(income1);
console.log(`Tax for income $${income1}: $${tax1}`);

const income2 = 80000;
const tax2 = calculateTax(income2);
console.log(`Tax for income $${income2}: $${tax2}`);

const income3 = 120000;
const tax3 = calculateTax(income3);
console.log(`Tax for income $${income3}: $${tax3}`);
