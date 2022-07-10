// Count duplicates in array
// Input - [1,2,3,3,4,4,5,6,7,8]
// Output - 2

const arr = [1,2,3,3,4,4,5,6,7,8];

const countDuplicate = (arr) => {
    const uniqueItems = new Set();
    const duplicates = new Set();
    for (const value of arr) {
        if (uniqueItems.has(value)) {
            duplicates.add(value);
            uniqueItems.delete(value);
        } else {
            uniqueItems.add(value)
        }
    }
    return duplicates.size;
}

const countDuplicate = (arr) => {
    const uniqueItems = new Set();
    const duplicates = new Set();
    for (let i = 0; i < arr.length; i++) {
        if (uniqueItems.has(arr[i])) {
            duplicates.add(arr[i]);
            uniqueItems.delete(arr[i]);
        } else {
            uniqueItems.add(arr[i]);
        }
    }
    return duplicates.size;
}

console.log(countDuplicate(arr));