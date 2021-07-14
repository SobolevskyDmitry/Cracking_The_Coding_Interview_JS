function swapIntegers(arr, i1, i2) {
    arr[i1] = arr[i1] - arr[i2];
    arr[i2] = arr[i1] + arr[i2];
    arr[i1] = arr[i2] - arr[i1];

    return arr
}

swapIntegers([1, 2, 3, 4], 1, 3)

