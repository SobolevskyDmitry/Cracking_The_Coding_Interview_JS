let arr = [
    [15, 20, 40,  85],
    [20, 35, 80,  95],
    [30, 55, 95,  105],
    [40, 80, 100, 120]
];

function findElem(arr, x) {
    let row = 0;
    let col = arr[0].length - 1;

    while (row < arr.length && col >= 0) {
        if (arr[row][col] === x) {
            return true;
        } else if (arr[row][col] > x) {
            col--;
        } else {
            row++;
        }
    }

    return false;
}

findElem(arr, 40)
