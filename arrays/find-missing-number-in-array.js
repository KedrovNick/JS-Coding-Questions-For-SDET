// Find the missing number in array
let arr = [1,2,3,4,5,6,7,9,10];

const findMissingNum = (arr) => {
    let len = arr.length;
    let actual = len + 1;
    let total = actual * (actual + 1) / 2; // mathematically that's the way to count total
    let arrayTotal = arr.reduce((prev, current) => prev + current)
    return total - arrayTotal;
}

console.log(findMissingNum(arr));