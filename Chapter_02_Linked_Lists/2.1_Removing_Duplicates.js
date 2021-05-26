const {LinkedList} = require("./LinkedList_Node");

class LinkedListNew extends LinkedList {
    constructor() {
        super();
    }

    removeDuplicates() {
        let prev, current = this.head;
        const set = new Set();

        while (current) {
            if (set.has(current.value)) {
                prev.next = current.next;
                current = current.next;
            } else {
                set.add(current.value);
                prev = current;
                current = current.next;
            }

        }
    }
}


const newLinkedList = new LinkedListNew();

newLinkedList.addArray([1, 4, 5, 6, 4, 7, 6]);

newLinkedList.removeDuplicates();

newLinkedList.print()
