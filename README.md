# Most Popular JavaScript Coding Questions

## Arrays
1. Remove Duplicates From Array
  ```js
  const arr = [100,100,200,200,300,400,400];

// Soution 1 - using Set and spread operator
const removeDuplicates = (arr) =>  {return [...new Set(arr)] }


// Solution 2 - using ForEach
const removeDuplicates = (arr) => {
    // New array wheere we're gonna store all unique vals
    const results = [];
    arr.forEach(val => {
        if (!results.includes(val)) {
            results.push(val)
        }
    });
    return results;
}

// Solution 3 - using reduce method
const removeDuplicates = (arr) => {
    return arr.reduce((previousValue, currentValue) => {
            return previousValue.includes(currentValue) ? previousValue :  [...previousValue, currentValue];
        }, []);
};
  ```
2. Sort Array (ASC,DESC) - Numbers or Strings
  ```js
 // Solution 1 - Sort array of numbers
 const sortArr = (arr) => {
     return arr.sort((a,b) => a - b);
 }
  ```
3. Find missing number in array
  ```js
  let arr = [1,2,3,4,5,6,7,9,10];

const findMissingNum = (arr) => {
    let len = arr.length;
    let actual = len + 1;
    let total = actual * (actual + 1) / 2; // mathematically that's the way to count total
    let arrayTotal = arr.reduce((prev, current) => prev + current)
    return total - arrayTotal;
}
  ````
4. Find duplicates in array
  ```js
  const arr = [10,3,3,45,54,1,1,34,54,2,34,55,2];

const findDuplicate = (arr) => {
    let sortedArr = arr.sort((a,b) => a - b);
    console.log("original array: " + arr)
    console.log(sortedArr);
    let results = [];
    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i+1] === sortedArr[i]) {
            results.push(arr[i])
        }
    }
    return results;
}
  ```
## Objects
1.
2.
3.

## Strings
1. Reverse String
2.
3.

## Numbers
1. Reverse Number
2.
3.
