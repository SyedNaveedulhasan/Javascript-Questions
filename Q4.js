function isPalindrome(str) {
    const normalizedStr = str.toLowerCase().replace(/[\W_]/g, '');
    const reversedStr = normalizedStr.split('').reverse().join('');
    return normalizedStr === reversedStr;
}

const inputString = "A man, a plan, a canal, Panama";
const palindromeCheck = isPalindrome(inputString);
console.log(palindromeCheck);
