const {createBst} = require("./utils");

function allSequences(node) {
    const result = [];

    if (!node) {
        result.push([]);
        return result;
    }

    const prefix = [];
    prefix.push(node.data);

    const leftSeq = allSequences(node.left);
    const rightSeq = allSequences(node.right);

    for (let left of leftSeq) {
        for (let right of rightSeq) {
            const weaved = [];
            weaveLists(left, right, weaved, prefix);
            result.push(...weaved);
        }
    }

    return result;
}

function weaveLists(first, second, results, prefix) {
    if (!first.length || !second.length) {
        results.push([...prefix, ...first, ...second]);
        return;
    }

    //first
    const headFirst = first.shift();
    prefix.push(headFirst);

    weaveLists(first, second, results, prefix);

    prefix.pop();
    first.unshift(headFirst);

    //second
    const headSecond = second.shift();
    prefix.push(headSecond);

    weaveLists(first, second, results, prefix);

    prefix.pop();
    second.unshift(headSecond);

}

let bst = createBst([1, 2, 3, 4]);

allSequences(bst);
