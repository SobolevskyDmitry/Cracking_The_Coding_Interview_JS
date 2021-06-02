class Node {
    next;

    constructor(value) {
        this.value = value;
    }
}

class LinkedList {
    head = null;
    length = 0;

    constructor() {
    }


    add(value) {
        if (!value) {
            return;
        }

        let current = this.head, prev;

        if (!this.head) {
            this.head = new Node(value);
            this.length++;

            return this.length;
        }

        while (current) {
            prev = current;
            current = current.next;
        }

        prev.next = new Node(value);
        this.length++;

        return this.length;
    }

    addArray(array) {
        array.forEach(value => this.add(value));
        return this.head;
    }

    remove(value) {
        if (!value || !this.head) {
            return;
        }

        if (this.head === value) {
            this.head = this.head.next;
            this.length--;

            return this.length;
        }

        let current = this.head, prev;

        while (current && current.value !== value) {
            prev = current;
            current = current.next;
        }

        prev.next = current.next;
        this.length--;

        return this.length;
    }

    findIndex(value) {
        if (!value || !this.head) {
            return -1;
        }

        let index = 0, current = this.head, prev;

        if (value === this.head) {
            return index;
        }

        while (current && current.value !== value) {
            index++;
            prev = current;
            current = current.next;
        }

        return current.value === value ? index : -1;
    }

    print() {
        if (!this.head) {
            return;
        }

        let current = this.head, prev, row = '';

        while (current) {
            row += `${current.value} -> `;
            prev = current;
            current = current.next;
        }

        console.log(row);
    }
}

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

function addExistingNode(node, newNode) {
    if (!node || !newNode) {
        return node;
    }

    if (!node.next) {
        node.next = newNode;

        return node;
    } else {
        return addExistingNode(node.next, newNode);
    }
}

module.exports = {LinkedList, Node, addNewNode, addExistingNode};
