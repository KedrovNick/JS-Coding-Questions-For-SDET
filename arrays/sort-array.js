// Solution 1 - Sort array of numbers
const arr = Array.from(Array(1000).keys())
console.log(arr);
const sortArr = (arr) => {
    return arr.sort((a,b) => b - a);
 }

console.log(sortArr(arr));