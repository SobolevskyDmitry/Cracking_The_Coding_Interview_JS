function isUnique(str) {
    if (!str) {
        return false;
    }

    if (str.length === 1) {
        return true;
    }

    const letterSet = new Set();

    for (let i = 0; i < str.length; i++) {
        if (letterSet.has(str[i])) {
            return false;
        }

        letterSet.add(str[i]);
    }

    return true;
}
