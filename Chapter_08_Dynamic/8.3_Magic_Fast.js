const arr = [-10, -5, 2, 2, 2, 3, 4, 7, 9, 12, 13];

function magicFast(arr, start = 0, end = arr.length - 1) {
    if (start > end) {
        return -1;
    }

    const mid = Math.ceil((start + end) / 2);

    if (arr[mid] === mid) {
        return mid;
    } else if (arr[mid] > mid) {
        return magicFast(arr, start, mid - 1);
    } else {
        return magicFast(arr, mid + 1, end);
    }
}

magicFast(arr)
