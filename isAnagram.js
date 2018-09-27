const isAnagram = (s, t) => {
	const str1 = cleanString(s);
	const str2 = cleanString(t);

	return (str1 === str2);
};

var cleanString = str => str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')