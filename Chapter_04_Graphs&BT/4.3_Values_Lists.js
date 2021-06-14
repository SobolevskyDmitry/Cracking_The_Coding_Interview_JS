const {createBst} = require("./utils");


class ListNode {
    next;
    data;

    constructor(data) {
        this.data = data;
    }
}

class LinkedList {
    constructor(head) {
        this.head = new ListNode(head);
        this.length = head ? 1 : 0;
    }

    add(value) {
        const node = new ListNode(value);

        if (!this.length) {
            this.head = node;
            // If there are no nodes
            // node variable will be the first and head node in the list
        } else {
            let current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }

        this.length++;
    }
}

function createLvlLinkedLists(tree) {
    const arr = [];

    createDepthLinedList(tree.root, 0, arr);

    return arr;
}

function createDepthLinedList(root, level, lists) {
    if (!root) {
        return;
    }

    if (!lists[level]) {
        lists[level] = new LinkedList(root.data);
    } else {
        lists[level].add(root.data);
    }

    createDepthLinedList(root.left, level + 1, lists);
    createDepthLinedList(root.right, level + 1, lists);
}


createLvlLinkedLists(createBst([1, 2, 3, 4, 5, 6, 7]))

/**
 4
 2        6
 1     3  5     7

 **/

