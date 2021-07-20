function printPairSum(arr, target) {
    const result = [];
    const set = new Set();

    for (let x of arr) {
        const complement = target - x;

        if (set.has(complement) && !set.has(x)) {
            result.push([x, complement]);
        }

        set.add(x);
    }

    return result;
}

printPairSum([1,3,2,5,7,4], 7)
