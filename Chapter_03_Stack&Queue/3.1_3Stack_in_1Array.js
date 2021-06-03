const {Node} = require("./LinkedList_Node");

class QueueArray {
    array = [];

    step = 3;

    heads = {
        0: 0,
        1: 1,
        2: 2
    }

    push(type, value) {
        const newItem = new Node(value);

        if (this.array[this.heads[type]]) {
            //set newItem as next link
            this.array[this.heads[type]].next = newItem;

            //increace indexCounter
            this.heads[type] += this.step;

            //set to specific index
            this.array[this.heads[type]] = newItem
        } else {
            this.array[this.heads[type]] = newItem;
        }
    }

    pop(type) {
        if (type === undefined) {
            throw new Error('No type');
        }

        if (!this.array[this.heads[type]]) {
            throw new Error('Stack is empty');
        }

        const element = this.array[this.heads[type]];
        this.array[this.heads[type]] = null;

        if (this.array[this.heads[type] - this.step]) {
            this.heads[type] -= this.step;
            this.array[this.heads[type]].next = null;
        }

        return element;
    }

    peek(type) {
        if (type === undefined) {
            throw new Error('No type');
        }

        if (!this.array[this.heads[type]]) {
            throw new Error('Stack is empty');
        }

        return this.array[this.heads[type]];
    }

    isEmpty(type) {
        if (type === undefined) {
            throw new Error('No type');
        }

        return this.array[this.heads[type]]
    }
}


let arr = new QueueArray();

arr.push(0, 1);
arr.push(0, 2);
arr.push(0, 3);

arr.push(1, 11);
arr.push(1, 12);
arr.push(1, 13);

arr.push(2, 110);
arr.push(2, 120);
arr.push(2, 130);

console.log(arr);
