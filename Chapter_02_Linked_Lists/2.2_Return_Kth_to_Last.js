const {LinkedList} = require("./LinkedList_Node");


class LinkedListNew extends LinkedList {
    constructor() {
        super();
    }

    findKTHFromTheLast(k) {
        if (!k === undefined || !this.head) {
            return;
        }

        if (this.length === k) {
            return this.head;
        }

        let current = this.head, prev, index = 0;
        const rightIndex = this.length - Math.max(k, 1);

        while (current && rightIndex > index) {
            index++;
            prev = current;
            current = current.next;
        }

        return current;
    }
}

const newLinkedList = new LinkedListNew();

newLinkedList.addArray([1, 4, 5, 6, 4, 7]);

console.log(newLinkedList.findKTHFromTheLast(1));
