const {LinkedList, Node} = require("./LinkedList_Node");

class LinkedListNew extends LinkedList {
    constructor() {
        super();
    }

    partition(midValue) {
        let minStart, maxStart, minEnd, maxEnd, current = this.head;

        while (current) {
            if (current.value >= midValue) {
                if (!maxStart) {
                    maxStart = new Node(current.value);
                    maxEnd = maxStart;
                } else {
                    maxEnd.next = new Node(current.value);
                    maxEnd = maxEnd.next;
                }
            } else {
                if (!minStart) {
                    minStart = new Node(current.value);
                    minEnd = minStart;
                } else {
                    minEnd.next = new Node(current.value);
                    minEnd = minEnd.next;
                }
            }

            current = current.next;
        }

        if (minEnd && minStart) {
            minEnd.next = maxStart;

            this.head = minStart;

            return minStart;
        }

        this.head = maxStart;

        return maxStart;
    }
}


const list = new LinkedListNew();

list.addArray([3, 5, 8, 5, 10, 2, 1]);

list.partition(5);

list.print();

