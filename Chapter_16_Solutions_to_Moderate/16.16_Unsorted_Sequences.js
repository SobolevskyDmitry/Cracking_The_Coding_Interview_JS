const array = [1, 2, 4, 7, 10, 11, 8, 12, 5, 6, 16, 18, 19];

function findUnsortedSequence(arr) {
    let left = findEndOfLeftSubsequence(arr);
    if (left >= arr.length - 1) {
        return;
    }

    let right = findEndOfRightSubsequence(arr);

    let max_index = left;
    let min_index = right;

    for (let i = left + 1; i < right; i++) {
        if (arr[i] < arr[min_index]) {
            min_index = i;
        }

        if (arr[i] > arr[max_index]) {
            max_index = i;
        }
    }

    let left_index = shrinkLeft(arr, min_index, left);

    let right_index = shrinkRight(arr, max_index, right);

    return [left_index, right_index];
}

function findEndOfLeftSubsequence(arr) {
    let index = 0;
    while (arr[index] < arr[index + 1] && index < arr.length) {
        index++;
    }

    return index;
}

function findEndOfRightSubsequence(arr) {
    let index = arr.length - 2;

    while (index >= 0 && arr[index] < arr[index + 1]) {
        index--;
    }

    return index + 1;
}

function shrinkLeft(arr, min_index, start) {
    const comp = arr[min_index];

    for (let i = start - 1; i >= 0; i--) {
        if (arr[i] <= comp) {
            return i + 1;
        }
    }

    return 0;
}

function shrinkRight(arr, max_index, start) {
    const comp = arr[max_index];

    for (let i = start; i < arr.length; i++) {
        if (arr[i] >= comp) {
            return i - 1;
        }
    }

    return arr.length - 1;
}

findUnsortedSequence(array)
