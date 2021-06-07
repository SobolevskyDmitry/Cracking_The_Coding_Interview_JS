class Node {
    data;
    next;

    constructor(value) {
        this.data = value;
    }
}

class Stack {
    top;
    capacity;
    length = 0;

    constructor(capacity) {
        this.capacity = capacity;
    }


    isEmpty() {
        return !this.top;
    }

    isFull() {
        return this.length >= this.capacity;
    }

    pop() {
        if (!this.top) {
            throw new Error('Empty stack');
        }
        const item = this.top;

        this.top = this.top.next;

        this.length--;

        return item;
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


class SetOfStack {
    stacks = [];


    push(value) {
        if (!value) {
            throw new Error('No value');
        }

        const lastStack = this.stacks[this.stacks.length - 1];

        if (!lastStack || lastStack.isFull()) {
            const stack = new Stack(5);

            stack.push(value);

            this.stacks.push(stack);
        } else {
            lastStack.push(value);
        }
    }

    pop() {
        const lastStack = this.stacks[this.stacks.length - 1];

        if (!lastStack) {
            throw new Error('Empty stacks');
        }

        const item = lastStack.pop();

        if (lastStack.isEmpty()) {
            this.stacks.pop();
        }

        return item;
    }

    popAt(stackIndex) {
        const stack = this.stacks[stackIndex];

        if (!this.stacks.length || !stack) {
            throw new Error('Empty stack');
        }

        if (stack.length === 1) {
            this.stacks.splice(stackIndex, 1);
        }

        return stack.pop();
    }
}


let set = new SetOfStack();

set.push(1);
set.push(2);
set.push(3);
set.push(4);
set.push(5);

set.push(6);

console.log(set)
