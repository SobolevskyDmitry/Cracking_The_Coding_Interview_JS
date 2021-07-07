function createStackInit(boxes) {
    boxes = boxes.sort((a, b) => b.height - a.height);
    let maxHeight = 0;

    for (let i = 0; i < boxes.length; i++) {
        const height = createStack(boxes, i);
        maxHeight = Math.max(maxHeight, height);
    }

    return maxHeight;
}

function createStack(boxes, bottomIndex) {
    const bottom = boxes[bottomIndex];
    let maxHeight = 0;

    for (let i = bottomIndex + 1; i < boxes.length; i++) {
        if (boxes[i].height < bottom.height) {
            let height = createStack(boxes, i);
            maxHeight = Math.max(height, maxHeight);
        }
    }

    maxHeight += bottom.height;
    return maxHeight;
}

let boxes = [{
    height: 1
}, {
    height: 3
}, {
    height: 5
}, {
    height: 9
}, {
    height: 2
}]

createStackInit(boxes);
