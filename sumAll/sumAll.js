const sumAll = function(num1, num2) {
    if (typeof (num1+num2) != 'number') return "ERROR";
    numMin = Math.min(num1,num2);
    numMax = Math.max(num1,num2);
    if (numMin < 0) return "ERROR";
    sum = 0;
    for (i = numMin; i <= numMax; i++) {
        sum += i;
    }
    return sum;

}

module.exports = sumAll
