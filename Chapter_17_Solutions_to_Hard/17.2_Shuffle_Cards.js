let cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

function shuffleArrayRecursively(cards) {
    for (let i = 0; i < cards.length; i++) {
        const k = rand(0, i);
        const temp = cards[k];
        cards[k] = cards[i];
        cards[i] = temp;
    }

    return cards;
}

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


shuffleArrayRecursively(cards)
