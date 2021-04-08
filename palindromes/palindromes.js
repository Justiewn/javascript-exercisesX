const palindromes = function(string) {
    const letters = /^[a-z]+$/;

    let stringLower = string.toLowerCase();

    let toArray = Array.from(stringLower);

    let stripped = toArray.filter( ch => (ch.match(letters)) );
    let strippedReverse = stripped.slice().reverse();  // reverse() is IN-PLACE

    if (stripped.join() == strippedReverse.join()) return true;
    return false;
}

module.exports = palindromes
