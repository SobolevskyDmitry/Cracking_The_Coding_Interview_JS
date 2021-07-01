function getPerms(str) {
    if (str === null)
        return;

    const permutations = [];

    if (!str.length) {
        permutations.push('');

        return permutations;
    }

    //save letter
    const first = str[0];

    // pass rest of the string WITHOUT first letter
    const words = getPerms(str.substring(1));

    for (let word of words) {
        for (let j = 0; j <= word.length; j++) {
            // insert saved letter with current "j" index
            const s = insertChatAt(word, first, j);

            permutations.push(s);
        }

    }

    return permutations;
}

function insertChatAt(word, letter, index) {
    const firstPart = word.substring(0, index);
    const secondPart = word.substring(index);

    return firstPart + letter + secondPart;
}

getPerms('abc')
