function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.ceil(arr.length / 2);

    const leftArr = mergeSort(arr.slice(0, mid));
    const rightArr = mergeSort(arr.slice(mid, arr.length));


    return merge(leftArr, rightArr);
}

function merge(leftArr, rightArr) {
    const resultArr = [];

    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            resultArr.push(leftArr[leftIndex]);
            leftIndex++;
        } else {
            resultArr.push(rightArr[rightIndex]);
            rightIndex++;
        }
    }

    while (leftIndex < leftArr.length) {
        resultArr.push(leftArr[leftIndex]);
        leftIndex++;
    }

    while (rightIndex < rightArr.length) {
        resultArr.push(rightArr[rightIndex]);
        rightIndex++;
    }

    return resultArr;
}

mergeSort([6, 5, 12, 10, 9, 1]);


/**
 Fancy approach
 **/

function mergeSort(arr) {
    const half = arr.length / 2;

    // the base case is array length <=1
    if (arr.length <= 1) {
        return arr;
    }

    const left = arr.splice(0, half); // the first half of the array
    const right = arr;
    return merge(mergeSort(left), mergeSort(right));
}


function merge(left, right) {
    let sortedArr = []; // the sorted elements will go here

    while (left.length && right.length) {
        // insert the smallest element to the sortedArr
        if (left[0] < right[0]) {
            sortedArr.push(left.shift());
        } else {
            sortedArr.push(right.shift());
        }
    }

    // use spread operator and create a new array, combining the three arrays
    return [...sortedArr, ...left, ...right];
}
