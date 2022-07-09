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

 console.log(sortArr(arr));
  ```

## Objects
1.
2.
3.

## Strings
1.
2.
3.

## Numbers
1.
2.
3.
