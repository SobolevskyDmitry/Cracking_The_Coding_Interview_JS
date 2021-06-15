const {createBst} = require("./utils");

let bst = createBst([1, 2, 3, 4, 5, 6, 7]);

/**
        4
    2        6
 1     3  5     7

 **/

let lastValue;

function isValidBst(root) {
    if (!root) {
        return true;
    }

    if (!isValidBst(root.left)) {
        return false;
    }

    if (lastValue && root.data <= lastValue) {
        return false;
    }

    lastValue = root.data;

    if (!isValidBst(root.right)) {
        return false;
    }

    return true;
}


console.log(isValidBst(bst));
