function getPath(maze) {
    if (!maze || !maze.length) {
        return;
    }

    const path = [];

    const cache = new Map();

    const lastRow = maze.length - 1;
    const lastCol = maze[0].length - 1;

    if (getPathRec(maze, lastRow, lastCol, path, cache)) {
        return path;
    }

    return null;
}

function getPathRec(maze, row, col, path, cache) {
    if (col < 0 || row < 0 || !maze[row][col]) {
        return;
    }

    const point = {row, col};

    if (cache.has(point)) {
        return cache.get(point);
    }

    const isAtOrigin = row === 0 && col === 0;
    let success = false;

    if (isAtOrigin
        || getPathRec(maze, row, col - 1, path, cache)
        || getPathRec(maze, row - 1, col, path, cache)) {

        path.push(point);
        success = true;

    }

    cache.set(point, success);

    return success;
}

const maze =
    [
        [1, 1, 1],
        [0, 0, 1],
        [0, 0, 1]
    ]


getPath(maze);
