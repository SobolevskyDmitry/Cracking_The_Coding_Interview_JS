let array1 = [4, 1, 2, 1, 1, 2];
let array2 = [3, 6, 3, 3];

function findSwapValues(arr1, arr2) {
    const sum1 = sum(arr1);
    const sum2 = sum(arr2);

    for (let val1 of arr1) {
        for (let val2 of arr2) {
            const newSum1 = sum1 - val1 + val2;
            const newSum2 = sum2 - val2 + val1;

            if (newSum1 === newSum2) {
                return [val1, val2];
            }
        }
    }
}

function sum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0)
}


findSwapValues(array1, array2)
