const {Node, addExistingNode, addNewNode} = require("./LinkedList_Node");

function loopDetection(node) {
    if (!node) {
        return;
    }

    let slow = node;
    let fast = node;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            break;
        }
    }

    if (slow === fast) {
        slow = node;
    }

    while (fast && slow) {
        slow = slow.next;
        fast = fast.next;

        if (fast === slow) {
            return slow;
        }
    }

    return;
}

const loopItem = new Node(4);
const list = new Node(1);

addNewNode(list, 2);
addNewNode(list, 3);
addExistingNode(list, loopItem);
addNewNode(list, 5);
addNewNode(list, 6);
addNewNode(list, 7);
addNewNode(list, 8);
addNewNode(list, 9);
addNewNode(list, 10);
addNewNode(list, 11);
addExistingNode(list, loopItem);


loopDetection(list);

