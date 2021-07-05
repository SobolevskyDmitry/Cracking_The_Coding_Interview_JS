function makeChange(n, coins = [25, 10, 5, 1], index = 0) {
    if (index >= coins.length - 1) {
        return 1;  //reach the min coin [1]
    }

    const coinAmount = coins[index];
    let ways = 0;

    for (let i = 0; i * coinAmount <= n; i++) { // check if cycle condition is still less or equal n
        let amountRemaining = n - i * coinAmount;
        ways += makeChange(amountRemaining, coins, index + 1)
    }

    return ways;
}

makeChange(25)
