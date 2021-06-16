const {createBst} = require("./utils");

let bst = createBst([1, 2, 3, 4, 5, 6, 7]);


/**
        4
    2        6
 1     3  5     7

 **/
function findSuccessor(node) {
    if (!node) {
        throw new Error('Invalid node');
    }

    let snode;

    if (node.right) {
        snode = node.right;

        while (snode.left) {
            snode = snode.left;
        }

        return snode.data;
    } else {
        snode = node;

        while (snode.parent && snode !== snode.parent.left) {
            snode = snode.parent;
        }

        return snode.parent && snode.parent.data;
    }
}

findSuccessor(bst.left.right);
