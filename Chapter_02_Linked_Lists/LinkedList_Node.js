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

module.exports = {LinkedList, Node};
