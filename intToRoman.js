const intToRoman = num => {
	let roman = '';

	const romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

	const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

	for (let i = 0; i < numbers.length; i++) {
		while (num >= numbers[i]) {
			roman = roman + romanNumeral[i];
			num = num - numbers[i];
		}
	}

	return roman;
};

/* i.e. intToRoman(54)
while (54 >= 50) {
	roman = '' + 'L'
	num = 54 - 50
}

while (4 >= 4) {
	roman = 'L' + "IV"
	num = 4 - 4
}

*/