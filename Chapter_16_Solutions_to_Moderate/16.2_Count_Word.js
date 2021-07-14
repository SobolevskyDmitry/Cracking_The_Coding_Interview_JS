function buildTable(textArr) {
    if (!textArr || !textArr.length) {
        throw new Error('Bad argument');
    }

    const map = new Map();

    textArr.forEach(word => {
        if(!word) {
            return;
        }

        const formattedWord = word.toLowerCase();

        if (map.has(formattedWord)) {
            map.set(formattedWord, map.get(formattedWord) + 1);
        } else {
            map.set(formattedWord, 1)
        }
    });

    return map;
}

function getFrequency(table, word) {
    if (!table) {
        throw new Error('No table');
    }

    return table.get(word.toLowerCase()) || 0;
}
