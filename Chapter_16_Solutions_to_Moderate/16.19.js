let map = [
    [0, 2, 1, 0],
    [0, 1, 0, 1],
    [1, 1, 0, 1],
    [0, 1, 0, 1]
]

function calculateLakesSize(map) {
    const lakes = [];

    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[0].length; j++) {
            const size = getSize(map, i, j);

            if (size) {
                lakes.push(size);
            }
        }
    }

    return lakes;
}

function getSize(map, i, j, size = 0) {
    const queue = [[i, j]];

    while (queue.length) {
        const [row, column] = queue.shift();

        if (map[row][column] === 0) {

            size++;
            map[row][column] = -1;

            //right
            if (map[row] && map[row][column + 1] === 0) {
                queue.push([row, column + 1]);
            }

            //right down
            if (map[row + 1] && map[row + 1][column + 1] === 0) {
                queue.push([row + 1, column + 1]);
            }

            // down
            if (map[row + 1] && map[row + 1][column] === 0) {
                queue.push([row + 1, column]);
            }

            // left down
            if (map[row + 1] && map[row + 1][column - 1] === 0) {
                queue.push([row + 1, column - 1]);
            }
        }

    }

    return size;
}

calculateLakesSize(map);
