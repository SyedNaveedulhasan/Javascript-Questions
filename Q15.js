function isLeapYear(year) {

    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

const year = 2024;
const isLeap = isLeapYear(year);

if (isLeap) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}
