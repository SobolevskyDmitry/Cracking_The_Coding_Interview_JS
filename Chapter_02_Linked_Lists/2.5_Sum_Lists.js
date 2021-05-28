const {LinkedList, Node} = require("./LinkedList_Node");

function sumLists(l1, l2, carry = 0) {
    if (!l1 && !l2 && !carry) {
        return;
    }

    const result = new Node();
    let value = carry;

    if (l1) {
        value += l1.value;
    }

    if (l2) {
        value += l2.value;
    }

    result.value = value % 10;

    if (l1 || l2) {
        result.next = sumLists(l1 && l1.next, l2 && l2.next, value >= 10 ? 1 : 0);
    }

    return result;
}


let l1 = new LinkedList().addArray([7,1,6,1]);
let l2 = new LinkedList().addArray([5,9,2]);


/**
 *     +1  +1
 *   7  1  6  1
 *   5  9  2
 *   ===========
 *   2  1  9  1
 *
 */

sumLists(l1, l2);



