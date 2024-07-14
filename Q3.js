function capitalizeFirstLetter(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

const inputSentence = "hello world";
const capitalizedSentence = capitalizeFirstLetter(inputSentence);
console.log(capitalizedSentence);
