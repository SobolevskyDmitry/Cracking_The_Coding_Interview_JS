function binarySearch(arr, left, right, x) {
    while (left <= right) {
        const mid = getCloserNotEmptyWordIndex(arr, Math.floor((left + right) / 2));

        if (arr[mid] < x) {
            left = getCloserNotEmptyWordIndex(arr, mid + 1);
        } else if (arr[mid] > x) {
            right = getCloserNotEmptyWordIndex(arr, mid - 1);
        } else if (arr[mid] === x) {
            return mid;
        }
    }

    return -1;
}

function getCloserNotEmptyWordIndex(arr, i) {
    if (arr[i]) {
        return i;
    }

    let left = i - 1;
    let right = i + 1;

    while (left >= 0 || right <= arr.length) {
        if (arr[left]) {
            return left;
        } else if (arr[right]) {
            return right;
        } else {
            left--;
            right++;
        }
    }

    return -1;
}

binarySearch(['at', '', '', '', 'ball', '', '', 'car', '', '', 'dad', '', ''], 0, 12, 'ball')
