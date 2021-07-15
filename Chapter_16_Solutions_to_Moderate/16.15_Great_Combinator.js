function greatCombinator(start, guess) {
    const map = {};
    const results = {
        heats: 0,
        pseudo: 0
    };

    for (let i = 0; i < guess.length; i++) {
        if (guess[i] === start[i]) {
            results.heats++;
        } else {
            if (map[start[i]]) {
                map[start[i]]++;
            } else {
                map[start[i]] = 1;
            }
        }
    }

    for (let i = 0; i < guess.length; i++) {
        if (map[guess[i]] && guess[i] !== start[i]) {
            results.pseudo++;
            map[guess[i]]--;
        }
    }

    return results;
}

greatCombinator('RGBY', 'GGRR')
