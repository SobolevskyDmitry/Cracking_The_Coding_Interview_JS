const {createBst} = require("./utils");

function checkHeight(root) {
    if (!root) return -1;

    const leftHeight = checkHeight(root.left);
    if (leftHeight === -Infinity) return -Infinity;

    const rightHeight = checkHeight(root.right);
    if (rightHeight === -Infinity) return -Infinity;

    const heightDiff = Math.abs(leftHeight - rightHeight);
    return heightDiff > 1 ? -Infinity : Math.max(leftHeight, rightHeight) + 1;
}

function checkBalanced(tree) {
    return checkHeight(tree) !== -Infinity;
}


let bst = createBst([1, 2, 3, 4, 5, 6, 7]);

checkBalanced(bst);

