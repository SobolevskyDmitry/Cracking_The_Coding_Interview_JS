
class Node {
    data;
    next;
    minElement;

    constructor(value) {
        this.data = value;
    }
}


class Stack {
    top;

    push(value) {
        if (!value) {
            throw new Error('No value');
        }

        const newItem = new Node(value);

        if (this.top) {
            const minElement = this.top.minElement;
            newItem.next = this.top;
            newItem.minElement = minElement.data > newItem.data ? newItem : minElement;

            this.top = newItem;
        } else {
            this.top = newItem;
            this.top.minElement = this.top;
        }
    }

    pop() {
        if (!this.top) {
            throw new Error('Stack is empty');
        }

        const item = this.top;

        this.top = this.top.next;

        return item;
    }

    min() {
        if (!this.top) {
            throw new Error('Stack is empty');
        }

        return this.top.minElement;
    }
}

//[10,2,6,3,7,1]
let stack = new Stack();
stack.push(10);
stack.push(2);
stack.push(6);
stack.push(3);
stack.push(7);
stack.push(1);

stack.pop();


