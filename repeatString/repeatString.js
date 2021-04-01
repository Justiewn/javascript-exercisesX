const repeatString = function(string, n) {
    if (n < 0) return 'ERROR';
    let finalString = '';
    for (i = 0; i < n; i++) {
        finalString += string;
    }
    return finalString;
}

module.exports = repeatString
