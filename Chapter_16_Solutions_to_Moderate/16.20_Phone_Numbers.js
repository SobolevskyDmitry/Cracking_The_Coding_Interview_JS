const t9Letters = [null, null, ['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i'], ['j', 'k', 'l'], ['m', 'n', 'o'], ['p', 'q', 'r', 's',], ['t', 'u', 'v'], ['w', 'x', 'y', 'z']]
const wordList = new Set(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]);

function getValidT9Words(number, worldList) {
    const results = [];

    getValidWords(number, 0, '', worldList, results);

    return results;
}

function getValidWords(number, index, prefix, wordSet, results) {

    if (index === number.length && wordSet.has(prefix)) {
        results.push(prefix);

        return;
    }

    const digit = number[index];
    const letters = getValidT9Chars(digit);

    if (letters) {
        for (let letter of letters) {
            console.log(letter);
            getValidWords(number, index + 1, prefix + letter, wordSet, results)
        }
    }
}

function getValidT9Chars(digit) {
    if (digit === undefined) {
        return;
    }

    return t9Letters[digit];
}

getValidT9Words('23', wordList)
