let persons = [{
    birth: 1900,
    death: 1950
}, {
    birth: 1920,
    death: 1970
}, {
    birth: 1910,
    death: 1930
}, {
    birth: 1933,
    death: 1952
}, {
    birth: 1941,
    death: 1960
}]


function getSortedYears(people, isDeath) {
    const years = [];

    for (let person of people) {
        years.push(isDeath ? person.death : person.birth);
    }

    return years.sort();
}

function maxAliveYear(people, min, max) {
    const births = getSortedYears(people);
    const deaths = getSortedYears(people, true);

    let birthIndex = 0;
    let deathIndex = 0;
    let maxAliveYear;
    let maxAlive = 0;
    let alive = 0;

    while (birthIndex < births.length && deathIndex < deaths.length) {
        if (births[birthIndex] <= deaths[deathIndex]) {
            alive++;

            if (alive > maxAlive) {
                maxAlive = alive;
                maxAliveYear = births[birthIndex];
            }

            birthIndex++;
        } else if (births[birthIndex] > deaths[deathIndex]) {
            alive--;

            deathIndex++;
        }
    }

    return maxAliveYear;
}

maxAliveYear(persons, 1900, 2000)
