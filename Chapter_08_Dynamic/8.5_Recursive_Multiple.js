function recursiveMultiple(a, b) {
    if (!a < 0 || !b < 0) {
        throw new Error('Bad arguments');
    }

    if (b === 0) {
        return 0;
    } else if (b === 1) {
        return a;
    } else {
        return a + recursiveMultiple(a, b - 1);
    }
}

recursiveMultiple(3, 4);
