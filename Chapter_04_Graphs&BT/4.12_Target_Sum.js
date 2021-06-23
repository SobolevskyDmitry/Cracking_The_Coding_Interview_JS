const {BST} = require("./utils");


let bst = new BST();

bst.addNode(20);
bst.addNode(15);
bst.addNode(25);
bst.addNode(10);
bst.addNode(17);
bst.addNode(22);
bst.addNode(30);

function findSumRoot(root, targetSum) {
    if (!root || !targetSum) {
        throw new Error('Bad arguments');
    }

    const path = [];

    return findSum(root, targetSum, path);
}


function findSum(node, targetSum, path) {
    let count = 0;

    if (!node) {
        return count;
    }

    path.push(node.data);

    let sum = 0;

    for (let i = path.length - 1; i >= 0; i--) {
        sum += path[i];

        if (sum === targetSum) {
            count++;
        }
    }

    count += findSum(node.left, targetSum, path) + findSum(node.right, targetSum, path);

    path.pop(); // remove unnecessary element

    return count;
}

findSumRoot(bst.root, 55)
