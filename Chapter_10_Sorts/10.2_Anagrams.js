function sort(arr) {
    const newArr = [];
    const map = new Map();

    for (let str of arr) {
        const key = sortCharts(str);
        const strings = map.get(key);
        if (strings) {
            map.set(key, [...strings, str]);
        } else {
            map.set(key, [str]);
        }
    }

    map.forEach((value, key) => {
        newArr.push(...value);
    });

    return newArr;
}

function sortCharts(str) {
    return str.split('').sort().join('');
}

sort(['qwe', 'ert', 'weq', 'opi', 'ter', 'qew'])
