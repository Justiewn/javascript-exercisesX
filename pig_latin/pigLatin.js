
function translate(string) {
	let answer = [];
	const words = string.split(' ');
	words.forEach(word => {
        const isVowel = new RegExp(/([aeiou])/i)
		let firstLetter = word[0];
		
		while (!(isVowel.test(firstLetter))) {
			if (word.substring(0, 3) == 'sch') {
				firstLetter = word.substring(0, 3)
				word = word.slice(3) + firstLetter;
			} else if (word.substring(0, 2) == 'qu') {
				firstLetter = word.substring(0, 2)
				word = word.slice(2) + firstLetter;
			} else {
			word = word.slice(1) + firstLetter;
			}
			firstLetter = word[0];
		}
		word += 'ay';
		answer.push(word);
		
	});
	answer = answer.join(" ");
	return answer;
}

module.exports = {
	translate
}

