// Solution 1 - Sort array of numbers
// Generate Array from 0 to 999
const arr = Array.from(Array(1000).keys())

// Sort Array using sort method in descending order
const sortArr = (arr) => {
    return arr.sort((a,b) => b - a);
 }

console.log(sortArr(arr));