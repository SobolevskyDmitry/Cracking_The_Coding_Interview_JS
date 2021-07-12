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
