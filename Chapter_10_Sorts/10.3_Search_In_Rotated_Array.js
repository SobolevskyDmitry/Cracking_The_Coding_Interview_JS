function search(arr, left, right, x) {
    const mid = Math.floor((left + right) / 2);

    if (x === arr[mid]) {
        return mid;
    }

    if (left > right) {
        return -1;
    }

    if (arr[left] < arr[mid]) { //left side is sorted properly
        if (x >= arr[left] && x < arr[mid]) { //search in the left
            return search(arr, left, mid - 1, x);
        } else {
            return search(arr, mid + 1, right, x);  //search in the right
        }
    } else if (arr[mid] < arr[left]) { // right side is sorted properly
        if (x >= arr[mid] && x <= arr[right]) { //search in the left
            return search(arr, mid + 1, right, x);
        } else {
            return search(arr, left, mid - 1, x); //search in the right
        }
    } else if (arr[left] === arr[mid]) { // left side has duplicates
        if (arr[mid] !== arr[right]) { // right side is different
            return search(arr, mid + 1, right, x);
        } else { // trying to find in both sides
            const result = search(arr, left, mid - 1, x);

            if (result === -1) {
                return search(arr, mid + 1, right, x);
            } else {
                return result;
            }
        }
    }

    return -1;
}


search([15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], 0, 11, 5)
