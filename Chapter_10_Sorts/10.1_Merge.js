function merge(a, b) {
    //start from the end of array
    let indexA = a.length - 1;
    let indexB = b.length - 1;

    // start from the end;
    let mergedArrayIndex = a.length + b.length - 1;

    while (indexB >= 0) {
        if (indexA >= 0 && a[indexA] > b[indexB]) {
            a[mergedArrayIndex] = a[indexA];
            indexA--;
        } else {
            a[mergedArrayIndex] = b[indexB];
            indexB--;
        }

        mergedArrayIndex--;
    }

    return a;
}

merge([5, 6], [2, 3])
