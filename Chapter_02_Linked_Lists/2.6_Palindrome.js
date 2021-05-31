const {LinkedList, Node} = require("./LinkedList_Node");


function addNewNode(node, value) {
    if (!node || value === undefined) {
        return node;
    }

    if (!node.next) {
        node.next = new Node(value);

        return node;
    } else {
        return addNewNode(node.next, value);
    }
}

function addArray(node, arr) {
    arr.forEach((val) => addNewNode(node, val));
    return node;
}


function recursive(node) {
    let prev, current = node, next;

    while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
}

function isPalindrome(node) {
    const len = length(node);

    if (len <= 1) {
        return true;
    }

    const stack = [];

    for (let i = 0; i < Math.floor(len / 2); i++) {
        stack.push(node.value);
        node = node.next;
    }

    if ((len % 2) === 1) {
        node = node.next;
    }

    while (node) {
        if (stack.pop() !== node.value) {
            return false;
        }

        node = node.next;
    }

    return true;
}


function isPalindromeRecursive(list) {
    //TODO: add recursive approach

    if(!list){
        return;
    }

    const recursiveList = recursive(list);
    let head  = list;
    let recursiveHead = recursiveList;

    while (head && recursiveHead) {
        if (head.value !== recursiveHead.value){
            return false;
        }

        head = head.next;
        recursiveHead = recursiveHead.next;
    }

    return true;
}


function length(node, count = 0) {
    if (!node) {
        return count;
    }

    return length(node.next, ++count);
}


let list = addArray(new Node(1), [2, 3, 4, 3, 2, 1])

console.log(isPalindrome(list));



