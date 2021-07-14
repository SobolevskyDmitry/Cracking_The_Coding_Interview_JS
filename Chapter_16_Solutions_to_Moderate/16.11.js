function allLengths(k, shorter, longer) {
    const lengths = new Set();

    getAllLengths(k, 0, shorter, longer, lengths)

    return lengths;
}

function getAllLengths(k, total, shorter, longer, lengths) {

    if (k === 0) {
        lengths.add(total);
        return;
    }

    getAllLengths(k - 1, total + shorter, shorter, longer, lengths);
    getAllLengths(k - 1, total + longer, shorter, longer, lengths);

    return lengths;
}

