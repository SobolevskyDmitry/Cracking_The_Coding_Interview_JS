const COLORS = {
    RED: 'red',
    BLUE: 'blue',
    BLACK: 'black',
}

const colors = [
    [COLORS.RED, COLORS.RED, COLORS.RED, COLORS.BLUE, COLORS.BLUE],
    [COLORS.BLUE, COLORS.RED, COLORS.RED, COLORS.BLUE, COLORS.BLUE],
    [COLORS.BLUE, COLORS.BLUE, COLORS.RED, COLORS.BLUE, COLORS.BLUE],
    [COLORS.BLUE, COLORS.RED, COLORS.RED, COLORS.BLUE, COLORS.BLUE]
]


function fillColor(arr, row, column, currentColor, newColor) {
    if (!arr || row === undefined || column === undefined) {
        throw new Error('Bad arguments');
    }


    if (row < 0
        || column < 0
        || column > arr[0].length - 1
        || row > arr.length - 1
        || currentColor !== arr[row][column]) {
        return;
    }

    arr[row][column] = newColor;

    fillColor(arr, row - 1, column, currentColor, newColor);
    fillColor(arr, row + 1, column, currentColor, newColor);
    fillColor(arr, row, column - 1, currentColor, newColor);
    fillColor(arr, row, column + 1, currentColor, newColor);

    return arr;
}


fillColor(colors, 0, 0, COLORS.RED, COLORS.BLACK)
