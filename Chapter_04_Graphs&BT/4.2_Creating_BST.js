const {Node} = require("./utils");


function create(values) {
    return createMinimalBST(values, 0, values.length - 1);
}

function createMinimalBST(values, start, end) {
    if (end < start){
        return;
    }

    const midIndex = Math.floor((start + end) / 2);
    const newNode = new Node(values[midIndex]);

    newNode.left = createMinimalBST(values, start, midIndex - 1);
    newNode.right = createMinimalBST(values, midIndex + 1, end);

    return newNode;
}


create([1,2,3,4,5,6,7,8,9,10,12,13]);
