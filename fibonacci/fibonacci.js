const fibonacci = function(n) {
    if (n < 0) return 'OOPS';
    if (n == 1) return 1;
    let a = 0;
    let b = 1;
    let temp;
    for (i = 0; i < n-1; i++) {
        temp = b;
        b = a + b;
        a = temp;
    }
    return b;

}

module.exports = fibonacci
