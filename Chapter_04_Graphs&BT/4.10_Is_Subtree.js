const {BST} = require("./utils");

let t1 = new BST();

t1.addNode(10);
t1.addNode(12);
t1.addNode(5);
t1.addNode(7);
t1.addNode(3);
t1.addNode(11);

let t2 = new BST();

t2.addNode(5);
t2.addNode(7);
t2.addNode(3);


// 1:  O(n + m)
function containsTree(t1, t2) {
    const t1Str = getStrinOrder(t1, '');
    const t2Str = getStrinOrder(t2, '');

    return t1Str.indexOf(t2Str) !== -1;
}


function getStrinOrder(node, str) {
    if (!node) {
        str += 'X';

        return str;
    }

    str += node.data;

    str = getStrinOrder(node.left, str);
    str = getStrinOrder(node.right, str);

    return str;
}


// 2:  O(log(n) + log(m))
function containsTree2(t1, t2) {
    if (!t2) {
        return true;
    }


    return subtree(t1, t2)
}


function subtree(t1, t2) {
    if (!t1) {
        return false;
    }

    if (t1.data === t2.data && match(t1, t2)) {
        return true;
    }

    return subtree(t1.left, t2) || subtree(t1.right, t2);
}

function match(t1, t2) {
    if (!t1 && !t2) {
        return true;
    } else if (!t1 || !t2 || t1.data !== t2.data) {
        return false;
    }

    return match(t1.left, t2.left) && match(t1.right, t2.right);
}

// 1:  O(n + m)
containsTree(t1.root, t2.root);

// 2:  O(log(n) + log(m))
containsTree2(t1.root, t2.root);

