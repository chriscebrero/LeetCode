const romanToInt = s => {
	const romanMap = {
		"M" : 1000,
		"D" : 500,
		"C" : 100,
		"L" : 50,
		"X" : 10,
		"V" : 5,
		"I" : 1
	};

	let sum = 0;

	for (let i = s.length - 1; i >= 0; i--) {
		let char = romanMap[s[i]];
		let nextChar = romanMap[s[i - 1]];

		if (nextChar < char) {
			sum += (char - nextChar);
			i--;
		} else {
			sum += char;
		}
	}

	return sum;
};