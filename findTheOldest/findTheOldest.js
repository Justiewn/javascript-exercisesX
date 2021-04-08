let findTheOldest = function(array) {
    return array.sort( (a, b) => {
        if (!a.yearOfDeath) a.yearOfDeath = 2020;
        if (!b.yearOfDeath) b.yearOfDeath = 2020;
        aAge = a.yearOfDeath - a.yearOfBirth;
        bAge = b.yearOfDeath - b.yearOfBirth;
        return (aAge < bAge) ? 1 : -1;
    })[0];
}

module.exports = findTheOldest
