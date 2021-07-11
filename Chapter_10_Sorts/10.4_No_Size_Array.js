class Listy {
    arr;

    constructor(arg) {
        this.arr = arg;
    }

    elementAt(index) {
        return this.arr[index] || -1;
    };
}

let list = new Listy([1, 3, 5, 7, 9, 13, 18]);


function find(listy, x) {
    let index = 1;

    while (listy.elementAt(index) !== -1 && listy.elementAt(index) < x) {
        index *= 2;
    }

    return binarySearch(listy, index / 2, index, x);
}


function binarySearch(listy, left, right, x) {
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const currValue = listy.elementAt(mid);

        if (currValue > x || currValue === -1) {
            right = mid - 1;
        } else if (x > currValue) {
            left = mid + 1;
        } else {
            return mid;
        }
    }


    return -1;

}

find(list, 18)
