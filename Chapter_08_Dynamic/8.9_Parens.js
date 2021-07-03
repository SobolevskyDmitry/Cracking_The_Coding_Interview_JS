//first approach

function generateParents(remaining) {
    const set = new Set();

    if (!remaining) {
        set.add('')
    } else {

        const words = generateParents(remaining - 1);

        for (let str of words) {
            for (let i = 0; i < str.length; i++) {
                if (str[i] === '(') {
                    const newStr = insert(str, i);

                    set.add(newStr);
                }
            }

            set.add('()' + str);
        }
    }

    return set;
}

function insert(str, index) {
    const leftPart = str.substring(0, index + 1);
    const rightPart = str.substring(index + 1, str.length);

    return leftPart + '()' + rightPart;
}


//second approach

function addParen(list = [], leftRem, rightRem, str = [], count) {
    if (leftRem < 0 || rightRem < leftRem) {
        return;
    }

    if (!leftRem && !rightRem) {
        list.push(str.join(''));
    } else {

        if (leftRem) {
            str[count] = '(';

            addParen(list, leftRem - 1, rightRem, str, count + 1);
        }

        if (rightRem > leftRem) {
            str[count] = ')';
            addParen(list, leftRem, rightRem - 1, str, count + 1);
        }
    }

    return list;
}

addParen([], 3, 3, [], 0);
