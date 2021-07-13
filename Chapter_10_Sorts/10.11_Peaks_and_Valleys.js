function sortValleyPeak(arr) {
    arr = arr.sort();

    for (let i = 1; i < arr.length; i += 2) {
        const temp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = temp;
    }

    return arr;
}

sortValleyPeak([1, 9, 8, 7, 4, 0])
