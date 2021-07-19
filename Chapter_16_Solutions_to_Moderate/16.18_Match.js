function match(pattern, value) {
    if (!pattern.length) {
        return !value.length
    }

    const mainChar = pattern[0];
    const altChar = mainChar === 'a' ? 'b': 'a';
    const size = value.length;

    const countOfMain = countOf(pattern, mainChar);
    const countOfAlt = pattern.length - countOfMain;
    const firstOfAlt = pattern.indexOf(altChar);

    const maxMainSize = size / countOfMain;

    for(let mainSize= 0; mainSize <= maxMainSize; mainSize++){
        const remainingLength = size - mainSize * countOfMain;
        const first = value.substring(0, mainSize);

        if(countOfAlt === 0 || remainingLength % countOfAlt === 0) {
            const altIndex = firstOfAlt * mainSize;
            const altSize = countOfAlt || remainingLength / countOfAlt;
            const second = !countOfAlt ? '' : value.substring(altIndex, altSize + altIndex);

            const cand = buildFromPattern(pattern, first, second);

            if(cand === value) {
                return true;
            }
        }
    }

    return false;
}

function countOf(pattern, char) {
    let count = 0;

    for(let i =0; i < pattern.length; i ++) {
        if(pattern[i] === char) {
            count++;
        }
    }

    return count;
}

function buildFromPattern(pattern, main, alt) {
    let res = '';

    const first = pattern[0];

    for (let i = 0; i < pattern.length; i++) {
        if (first === pattern[i]) {
            res += main;
        } else {
            res += alt;
        }
    }

    return res;
}

match('aabab', 'catcatgocatgo')
