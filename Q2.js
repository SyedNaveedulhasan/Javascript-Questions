function countVowels(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

const inputString = "Hello World";
const vowelCount = countVowels(inputString);
console.log(vowelCount);
