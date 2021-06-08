const {Node} = require("./LinkedList_Node");


class Stack {
    top;
    length = 0;


    isEmpty() {
        return !this.top;
    }

    pop() {
        if (!this.top) {
            throw new Error('Empty stack');
        }

        const item = this.top;
        this.top = this.top.next;

        this.length--;

        return item.data;
    }

    push(value) {
        const newItem = new Node(value);

        if (!top) {
            this.top = newItem;
        } else {
            newItem.next = this.top;
            this.top = newItem;
        }

        this.length++;
    }

    peek() {
        return this.top && this.top.data;
    }
}


class MyQueue {
    oldestStack = new Stack();
    newestStack = new Stack();

    size() {
        return this.oldestStack.length + this.newestStack.length;
    }

    push(value) {
        this.newestStack.push(value);
    }

    pop() {
        this.shiftStacks();
        return this.oldestStack.pop();
    }

    shiftStacks() {
        if (!this.oldestStack.isEmpty()) {
            return;
        }

        while (!this.newestStack.isEmpty()) {
            this.oldestStack.push(this.newestStack.pop())
        }
    }

    peek() {
        this.shiftStacks();
        return this.oldestStack.peek();
    }

}

let queue = new MyQueue();
queue.push(1);
queue.push(2);
queue.push(3);

