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

console.log(findDuplicate(arr));