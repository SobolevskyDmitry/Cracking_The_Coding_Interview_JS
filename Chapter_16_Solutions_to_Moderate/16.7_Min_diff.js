const array1 = [15, 2, 1, 11];
const array2 = [235, 19, 4, 12, 23, 127];

function findMinDifference(arr1, arr2) {
    if (!arr1 || !arr2) {
        throw new Error('Bad arguments');
    }

    arr1 = arr1.sort();
    arr2 = arr2.sort();

    let a = 0;
    let b = 0;
    let diff = Number.MAX_VALUE;

    while (a < arr1.length && b < arr2.length) {
        if (Math.abs(arr1[a] - arr2[b]) < diff) {
            diff = Math.abs(arr1[a] - arr2[b]);
        }

        if (arr1[a] < arr2[b]) {
            a++;
        } else {
            b++
        }
    }

    return diff;
}

findMinDifference(array1, array2)
