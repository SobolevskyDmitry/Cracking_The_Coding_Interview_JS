function pickM(original, m) {
    const subset = original.slice(0, m);

    for (let i = m; i < original.length; i++) {
        const k = rand(0, i);

        if (k < m) {
            subset[k] = original[i];
        }
    }

    return subset;
}

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

pickM([1, 2, 3, 4, 5, 6, 7, 8, 9], 4)
