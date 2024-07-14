function findFirstOccurrence(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i;
        }
    }
    return -1;
}

const inputArray = [5, 3, 7, 3, 9];
const elementToFind = 3;
const index = findFirstOccurrence(inputArray, elementToFind);
console.log(index);
