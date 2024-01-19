function array(arr) {
    const len = arr.length;
    for (let i = 0; i < len / 2; i++) {
        if (arr[i] !== arr[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

function createRandomArray(length) {
    const randomArray = [];
    for (let i = 0; i < length; i++) {
        const randomElement = Math.floor(Math.random() * 10) + 1;
        randomArray.push(randomElement);
    }
    return randomArray;
}
const myArray = createRandomArray(5);
console.log(myArray);
const result = array(myArray);
console.log( result);