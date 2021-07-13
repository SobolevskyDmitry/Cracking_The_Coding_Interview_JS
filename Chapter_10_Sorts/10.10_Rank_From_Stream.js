class Node {
    data;
    left;
    right;

    leftSize = 0;

    constructor(value) {
        this.data = value;
    }


    insert(value) {
        if (this.data < value) {
            if (this.right) {
                this.right.insert(value);
            } else {
                this.right = new Node(value);
            }
        } else {
            if (this.left) {
                this.left.insert(value);
            } else {
                this.left = new Node(value);
            }
            this.leftSize++;
        }


        return this;
    }

    getRank(value) {
        if (value === this.data) {
            return this.leftSize;
        } else if (value < this.data) {
            if (!this.left) {
                return -1;
            } else {
                return this.left.getRank(value);
            }
        } else {
            const rightRank = this.right ? this.right.getRank(value) : -1;

            if (rightRank === -1) {
                return -1;
            } else {
                return this.leftSize + 1 + rightRank;
            }
        }
    }
}


let tree = new Node(20);
tree.insert(25)
    .insert(15)
    .insert(10)
    .insert(13)
    .insert(5)
    .insert(23)
    .insert(24);

tree.getRank(24)
