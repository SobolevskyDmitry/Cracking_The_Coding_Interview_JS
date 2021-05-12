function rotateClockwise(matrix) {
    if (!matrix || !matrix.length || matrix.length != matrix[0].length) { //not a matrix
        return;
    }

    const n = matrix.length;

    for (let layer = 0; layer < n / 2; layer++) {
        const first = layer;
        const last = n - 1 - layer;
        
        for (let i = first; i < last; i++) {
            let offset = i - first;

            // save top
            let top = matrix[first][i];

            // left -> top
            matrix[first][i] = matrix[last - offset][first];

            // bottom -> left
            matrix[last - offset][first] = matrix[last][last - offset];

            // right -> bottom
            matrix[last][last - offset] = matrix[i][last];

            // top -> right
            matrix[i][last] = top;
        }
    }

    return matrix;
}

rotateClockwise([
        [1,   2,  3,  4],
        [5,   6,  7,  8],
        [9,  10, 11, 12],
        [13, 14, 15, 16]]
);
