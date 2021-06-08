const {Node} = require("../Chapter_02_Linked_Lists/LinkedList_Node");


class Stack {
    top;

    push(value) {
        if (!value) {
            throw new Error('No Value');
        }

        const newItem = new Node(value);

        if (this.top) {
            newItem.next = this.top;
        }

        this.top = newItem;
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error('Empty Stack');
        }

        const item = this.top;
        this.top = item.next;

        return item.data;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error('Empty Stack');
        }

        return this.top.data;
    }

    isEmpty() {
        return !this.top;
    }
}

function sort(s) {
    const r = new Stack();

    while (!s.isEmpty()) {
        const tmp = s.pop();

        while (!r.isEmpty() && r.peek() > tmp) {
            s.push(r.pop());
        }

        r.push(tmp);
    }

    return r;
}


let stack = new Stack();

stack.push(1);
stack.push(7);
stack.push(10);
stack.push(5);

sort(stack);

