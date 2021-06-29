function findPowerSet(input) {
    if (input.length === 0) {
        return [input];
    }

    const first = input[0];
    const rest = findPowerSet(input.slice(1));

    const tmp = [];

    rest.forEach(el => tmp.push([first].concat(el)));

    return tmp.concat(rest);

}

findPowerSet([1, 2, 3, 4])
