const reverseString = function(string) {
    let split = string.split("");
    let reverse = split.reverse();
    let answer = reverse.join("");
    return answer;
}

module.exports = reverseString
