function placeQueens(gridSize, row = 0, columns = [], results = []) {
    if (row === gridSize) {
        results.push([...columns]);
    } else {
        for (let col = 0; col < gridSize; col++) {
            if (checkValid(columns, row, col)) {
                columns[row] = col;
                //set a queen

                placeQueens(gridSize, row + 1, columns, results)
            }
        }
    }

    return results;
}

function checkValid(columns, row1, column1) {
    for (let row2 = 0; row2 < row1; row2++) {
        let column2 = columns[row2];

        if (column1 === column2) {
            return false;
        }

        const columnDistance = Math.abs(column2 - column1);
        const rowDistance = row1 - row2;

        if (columnDistance === rowDistance) {
            return false;
        }
    }

    return true;
}

placeQueens(8);
