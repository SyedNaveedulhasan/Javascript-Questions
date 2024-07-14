function doubleArrayElements(arr) {
    let doubledArray = [];
    for (let element of arr) {
        doubledArray.push(element * 2);
    }
    return doubledArray;
}

const inputArray = [1, 2, 3, 4, 5];
const doubledArray = doubleArrayElements(inputArray);
console.log(doubledArray);
