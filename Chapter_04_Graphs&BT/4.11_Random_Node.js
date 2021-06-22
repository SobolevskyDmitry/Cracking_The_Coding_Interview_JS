class Node {
    left;
    right;
    data;
    size = 0;

    constructor(data, left, right) {
        this.left = left;
        this.right = right;
        this.data = data;
    }
}

class BST {
    root;


    addNode(value) {
        if (!value) {
            throw new Error('Invalid value')
        }

        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(newNode, this.root);
        }

    }

    insertNode(newNode, root) {
        if (!newNode || !root) {
            throw new Error('Bad arguments');
        }

        root.size++;

        if (root.data > newNode.data) {
            if (root.left) {
                this.insertNode(newNode, root.left);
            } else {
                root.left = newNode;
            }
        } else {
            if (root.right) {
                this.insertNode(newNode, root.right);
            } else {
                root.right = newNode;
            }
        }
    }

    findNode(value, root = this.root) {
        if (!value || !root || value === root.data) {
            return root;
        }

        let node;

        node = this.findByValue(value, root.left)

        if (node) {
            return node;
        }

        node = this.findByValue(value, root.right);

        return node;
    }

    deleteNode(value, root = this.root) {
        if (!value) {
            throw new Error('Invalid value');
        }

        if (!root) {
            return root;
        }

        if (value < root.data) {
            root.left = this.deleteNode(value, root.left);
        } else if (value > root.data) {
            root.right = this.deleteNode(value, root.right);
        } else {
            //node without child
            //node with 1 child
            if (!root.left) {
                return root.right
            } else if (!root.right) {
                return root.left
            }

            const minNode = this.findMinNode(root.right);

            root.data = minNode.data;
            root.right = this.deleteNode(root.right, minNode.data);

            return root;
        }

    }

    findMinNode(node) {
        return node.left ? this.findMinNode(node.left) : node;
    }

    getRandomNode() {
        let idx = Math.ceil(Math.random() * this.root.size);
        let node = this.root;

        while (idx > 0) {
            if (node.left) {
                if (idx === node.left.size + 1) {
                    return node;
                } else if (idx <= node.left.size) {
                    node = node.left;
                } else if (node.right) {
                    idx -= node.left.size + 1;
                    node = node.right;
                }
            } else {
                if (idx <= 1) {
                    return node;
                } else if (node.right) {
                    --idx;
                    node = node.right;
                }
            }
        }
    }
}

let bst = new BST();

bst.addNode(10);
bst.addNode(13);
bst.addNode(15);
bst.addNode(14);
bst.addNode(20);

bst.getRandomNode();
