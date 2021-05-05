function checkPermutation(str1, str2) {
    if (str1.length !== str2.length || !str1 || !str2) {
        return false;
    }

    const counter = {};

    for (let i = 0; i < str1; i++) {
        if (counter[str1[i]]) {
            counter[str1[i]]++
        } else {
            counter[str1[i]] = 1;
        }
    }

    for (let j = 0; j < str2; j++) {
        if (counter[str2[j]]) {
            counter[str2[j]]--;
        } else {
            return false;
        }
    }

    return true;
}
