function compresStr(str) {
    let result = '';

    let symbol = str[0];
    let counter = 1;

    for (let i = 1; i < str.length; i++) {
        if (symbol === str[i]) {
            counter++;
        } else {
            result += symbol + counter;
            symbol = str[i];
            counter = 1;
        }
    }

    result += symbol + counter;

    return result;
}

// INPUT: aabcccccaaa
// OUTPUT: a2b1c5a3

compresStr('aabcccccAaa')
