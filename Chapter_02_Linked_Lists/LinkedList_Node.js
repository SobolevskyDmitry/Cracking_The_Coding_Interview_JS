export class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

export class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    add(value) {
        const node = new Node(value);

        if (!this.length) {
            this.head = node;
            // If there are no nodes 
            // node variable will be the first and head node in the list
        } else {
            let current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = new Node(value);
        }

        this.length++;
    }

    insertAt(position, value) {
        if (position < 0 || position > this.length) {
            // returns the warning message 
            // if incorrect position was specified
            return 'Incorrect value of position';
        }

        const node = new Node(value);
        // creates the node using class Node

        if (position === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            let current = this.head;
            let prev = null;
            let index = 0;

            while (index < position) {
                prev = current;
                current = current.next;
                index++;
            }

            prev.next = node;
            node.next = current;
        }

        this.length++;
    }

    getNodeByPosition(position) {
        if (position < 0 || position > this.length) {
            // verification of the specified position value
            return 'Incorrect value of position';
        }

        let current = this.head;
        // the head of the list
        let index = 0;
        // the index for incrementation

        while (index < position) {
            // goes through each node until the index reaches the position
            current = current.next;
            // moves the link to the next node of the current node
            index++;
            // increaments the index
        }

        return current.value;
    }

    removeFromPosition(position) {
        if (position < 0 || position > this.length) {
            //verification on correct value of position like in the insertInPosition and getNodeByPosition
            return 'Incorrect value of position';
        }

        let current = this.head;
        // now current is the head of the Linked List

        if (position === 0) {
            this.head = current.next;
        } else {
            let prev = null;
            let index = 0;

            while (index < position) {
                prev = current;
                current = current.next;
                index++;
            }

            prev.next = current.next;
        }

        this.length--;
        return current.value;
    }

    getIndexOf(value) {
        let current = this.head;
        // current is a head of our list
        let index = 0;
        // index which will be returned

        while (current) {
            if (current.value === value) {
                return index;
            }

            current = current.next;
            index++;
        }

        return -1;
    }

    removeElement(element) {
        let current = this.head;
        let prev = null;

        // iterate over the list
        while (current != null) {
            // comparing element with current
            // element if found then remove the
            // and return true
            if (current.element === element) {

                if (!prev) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }

                this.size--;
                return current.element;
            }

            prev = current;
            current = current.next;
        }

        return -1;
    }

    print() {
        let current = this.head;

        while (current) {
            console.log(current.value);
            // output the value of the node
            current = current.next;
        }
    }
}
