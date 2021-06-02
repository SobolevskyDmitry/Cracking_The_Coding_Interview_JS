const {Node, addExistingNode} = require("./LinkedList_Node");


function getTailAndSize(node, count = 0) {
    if (!node || !node.next) {
        return [node, count];
    }


    return getTailAndSize(node.next, ++count);
}

function removeNodeLeft(list, count) {
    if (!list || !count) {
        return list;
    }

    let current = list;

    while (count) {
        current = current.next;
        count--;
    }

    return current;
}

function compareLists(list1, list2) {
    if (!list1 || !list2) {
        return;
    }


    const [tail1, size1] = getTailAndSize(list1);
    const [tail2, size2] = getTailAndSize(list2);


    if (tail1 !== tail2) {
        return false;
    }

    if (size1 !== size2) {
        const lengthDiff = size1 > size2
            ? size1 - size2
            : size2 - size1;

        if (size1 > size2) {
            list1 = removeNodeLeft(list1, lengthDiff);
        } else {
            list2 = removeNodeLeft(list2, lengthDiff);
        }
    }

    let head1 = list1;
    let head2 = list2;

    while (head1 && head2) {
        if (head1 === head2) {
            return true
        }

        head1 = head1.next;
        head2 = head2.next;
    }


    return false;
}


let commonNode = new Node(7);
addExistingNode(commonNode, new Node(2));
addExistingNode(commonNode, new Node(1));

let list1 = new Node(3);
let list2 = new Node(4);

// 1 list
addExistingNode(list1, new Node(1));
addExistingNode(list1, new Node(5));
addExistingNode(list1, new Node(9));

addExistingNode(list1, commonNode);

// 2 list

addExistingNode(list2, new Node(6));
addExistingNode(list2, commonNode);


compareLists(list1, list2)


