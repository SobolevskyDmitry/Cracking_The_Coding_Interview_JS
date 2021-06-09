class Node {
    next;
}

class Animal extends Node {
    name;
    ts;

    constructor(name, ts) {
        super();

        this.name = name;
        this.ts = ts;
    }
}

class Dog extends Animal {
    constructor(name, ts) {
        super(name, ts);
    }
}

class Cat extends Animal {
    constructor(name, ts) {
        super(name, ts);
    }
}

class LinkedList {
    head;

    length = 0;

    add(node) {
        if (!node) {
            throw new Error('No node');
        }

        this.length++;

        if (!this.head) {
            this.head = node;

            return this;
        }

        let current = this.head;

        while (current.next) {
            current = current.next;
        }

        current.next = node;

        return this;
    }

    size() {
        return this.length;
    }

    poll() {
        if (!this.head) {
            throw new Error('List is empty')
        }

        const item = this.head;

        this.head = item.next;
        this.length--;

        return item;
    }

    peek() {
        return this.head;
    }
}

class AnimalQueue {
    dogs = new LinkedList();
    cats = new LinkedList();

    enqueue(animal) {
        if (!animal) {
            throw new Error('no animal')
        }

        if (animal instanceof Dog) {
            this.dogs.add(animal);
        } else {
            this.cats.add(animal);
        }

        return this;
    }

    deenqueueAny() {
        if (this.dogs.size() === 0 && this.cats.size() === 0) {
            throw new Error('emptys queues')
        }

        if (!this.dogs.size()) {
            return this.deenqueueCat();
        }

        if (!this.cats.size()) {
            return this.deenqueueDog();
        }

        if (this.dogs.peek().ts < this.cats.peek().ts) {
            return this.deenqueueDog();
        } else {
            return this.deenqueueCat();
        }

    }

    deenqueueCat() {
        if (!this.cats.size()) {
            throw new Error('Cats is empty')
        }

        return this.cats.poll();
    }

    deenqueueDog() {
        if (!this.dogs.size()) {
            throw new Error('Dogs is empty')
        }

        return this.dogs.poll();
    }
}

const queue = new AnimalQueue();

queue
    .enqueue(new Dog('dog1', +new Date()))
    .enqueue(new Cat('cat1', +new Date() + 1))
    .enqueue(new Dog('dog2', +new Date() + 2))
    .enqueue(new Cat('cat2', +new Date() + 3))
