function sortAscending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

const inputArray = [3, 1, 4, 1, 5, 9, 2, 6];
const sortedAscending = sortAscending(inputArray.slice());
console.log(sortedAscending);


