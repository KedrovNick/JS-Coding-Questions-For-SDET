// Task - Remove duplicates from Array
// Input: [100,100,200,200,300,400,400]
// Output: [100,200,300,400]

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

console.log(removeDuplicates(arr));