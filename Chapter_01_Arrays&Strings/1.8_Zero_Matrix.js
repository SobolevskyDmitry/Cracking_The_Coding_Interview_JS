function zeroMatrix(matrix) {
    const rows = [];
    const columns = [];

    //find zero in rows and columns
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (!matrix[i][j]) {
                rows[i] = true;
                columns[j] = true;
            }
        }
    }

    //check rows
    for (let r = 0; r < rows.length; r++) {
        if (rows[r]) {
            nullifyRowOrColumn(matrix, r, true);
        }
    }

    //check columns
    for (let c = 0; c < columns.length; c++) {
        if (columns[c]) {
            nullifyRowOrColumn(matrix, c);
        }
    }

    return matrix;
}

function nullifyRowOrColumn(matrix, index, isRow) {
    for (let i = 0; i < matrix.length; i++) {
        if (isRow) {
            matrix[index][i] = 0;
        } else {
            matrix[i][index] = 0;
        }
    }
}

// INPUT:
//  [
//   [1, 2, 3, 0],
//   [5, 6, 7, 8],
//   [9, 0, 11, 12],
//   [13, 14, 15, 16]
// ]

zeroMatrix([[1, 2, 3, 0], [5, 6, 7, 8], [9, 0, 11, 12], [13, 14, 15, 16]]);
