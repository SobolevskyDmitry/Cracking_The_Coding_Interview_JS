//todo: do it O(n)

function isOneModification(str1, str2) {
    if (!str1 || !str2) {
        return false;
    }

    if (Math.abs(str1.length - str2.length) > 1) {
        return false;
    }

    let counter = 0;

    const set = new Set();

    for (let i = 0; i < str1.length; i++) {
        set.add(str1[i]);
    }

    for (let i = 0; i < str2.length; i++) {
        if (set.has(str2[i])) {
            set.delete(str2[i])
        }
    }

    return set.size <= 1;
}

// INPUT 'pales', 'pale'
// OUTPUT true
