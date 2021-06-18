const {createBst} = require("./utils");


function commonAncestor(root, p, q) {

    if (!covers(root, p) || !covers(root, q)) {
        return;
    } else if (covers(p, q)) {
        return p;
    } else if (covers(q, p)) {
        return q;
    }

    let sibling = getSibling(p);
    let parent = p.parent;

    while (!covers(sibling, q)) {
        sibling = getSibling(parent);
        parent = parent.parent;
    }

    return parent;
}

function covers(root, p) {
    if (!root) return false;

    if (root === p) return true;

    return covers(root.left, p) || covers(root.right, p);
}

function getSibling(node) {
    if (!node || !node.parent) {
        return;
    }

    const parent = node.parent;

    return parent.left === node ? parent.right : parent.left;
}

let bst = createBst([1, 2, 3, 4, 5, 6, 7]);

commonAncestor(bst, bst.left.left, bst.right.right);
