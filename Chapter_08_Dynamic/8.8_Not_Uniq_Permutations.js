function getAllPermutations(str) {
    const result = [];
    const map = buildFreqMap(str);

    getPermutations(map, '', str.length, result);

    return result;
}

function buildFreqMap(str) {
    const map = new Map();

    for (let i = 0; i < str.length; i++) {
        const s = str[i];
        const sCounter = map.get(s);

        map.set(s, sCounter ? sCounter + 1 : 1);
    }

    return map;
}

function getPermutations(map, prefix, remaining, result) {
    if (!remaining) {
        result.push(prefix);

        return;
    }

    map.forEach((count, letter) => {
            if (!count) {
                return;
            }

            map.set(letter, count - 1);
            getPermutations(map, prefix + letter, remaining - 1, result);
            map.set(letter, count);
        }
    );
}

getAllPermutations('abc')
