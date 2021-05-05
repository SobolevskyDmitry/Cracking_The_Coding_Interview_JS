function replaceSpaces(str, length) {
    const replaceSymbol = '%20';

    if (!str) {
        return;
    }

    const strArr = Array.from(str).splice(0, length);

    for (let i = length - 1; i >= 0; i--) {
        if (strArr[i] === ' ') {
            strArr[i] = '%20';
        }
    }

    return strArr.join('')
}


// INPUT: "Mr John Smith    "
// OUTPUT: "MR%20John%Smith"

replaceSpaces('Mr John Smith    ', 13);