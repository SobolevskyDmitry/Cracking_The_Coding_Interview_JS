function ways(expr, res, i, j, cache) {
    if (i === j) {
        return parseInt(expr[i]) === res ? 1 : 0;
    } else if (!([i, j, res] in cache)) {

        let ans = 0;

        for (let k = i + 1; k < j; k += 2) {
            const op = expr[k];
            const leftTrue = ways(expr, 1, i, k - 1, cache);
            const leftFalse = ways(expr, 0, i, k - 1, cache);
            const rightTrue = ways(expr, 1, k + 1, j, cache);
            const rightFalse = ways(expr, 0, k + 1, j, cache);

            if (op === '|') {
                if (res) {
                    ans += leftTrue * rightTrue + leftTrue * rightFalse + leftFalse * rightTrue;
                } else {
                    ans += leftFalse * rightFalse;
                }
            } else if (op === '^') {
                if (res) {
                    ans += leftTrue * rightFalse + leftFalse * rightTrue;
                } else {
                    ans += leftTrue * rightTrue + leftFalse * rightFalse;
                }
            } else if (op === '&') {
                if (res) {
                    ans += leftTrue * rightTrue;
                } else {
                    ans += leftFalse * rightFalse + leftTrue * rightFalse + leftFalse * rightTrue;
                }
            }
        }

        cache[[i, j, res]] = ans;
    }

    return cache[[i, j, res]];
}

function countEval(expr, res) {
    return ways(expr, res ? 1 : 0, 0, expr.length - 1, {});
}
