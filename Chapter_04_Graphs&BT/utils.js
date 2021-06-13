class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    root;

    addNode(data) {
        const newNode = new Node(data);

        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }

    }

    insertNode(root, node) {
        if (node.data < root.data) {
            if (root.left) {
                this.insertNode(root.left, node);
            } else {
                root.left = node;
            }
        } else {
            if (root.right) {
                this.insertNode(root.right, node);
            } else {
                root.right = node;
            }
        }
    }

    remove(data) {
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, key) {
        if (!node) {
            throw new Error('Node doesnt exist');
        }

        if (key < node.data) {
            node.left = this.removeNode(node.left, key);

            return node;
        } else if (key > node.data) {
            node.right = this.removeNode(node.right, key);

            return node;
        }

        // found a key

        // deleting node with no children
        if (!node.left && !node.right) {
            node = null;

            return node;
        }

        // deleting node with one children
        if (!node.left) {
            node = node.right;

            return node;
        } else if (!node.right) {
            node = node.left;

            return node;
        }

        // Deleting node with two children
        // minumum node of the rigt subtree
        // is stored in aux
        const aux = this.findMinNode(node.right);
        node.data = aux.data;

        node.right = this.removeNode(node.right, aux.data);
        return node;
    }

    findMinNode(node) {
        // if left of a node is null
        // then it must be minimum node

        return !node.left ? node : this.findMinNode(node.left);
    }
}

module.exports = {BST, Node};
