function isPalindrome(str) {
    if (!str) {
        return;
    }

    const lettersCounter = new Set();

    for (let letter of str) {
        if (lettersCounter.has(letter)) {
            lettersCounter.delete(letter);
        } else if (letter !== ' ') {
            lettersCounter.add(letter);
        }
    }

    return lettersCounter.size <= 1;
}

//INPUT: "taco cat"
//OUTPUT: true

isPalindrome('taco cat')
