
const majorityElement = nums => {
	const numMap = {};
	let max = 0;
	let maxNum = '';

	for (let num of nums) {
		if (numMap[num]) {
			numMap[num]++;
		} else {
			numMap[num] = 1;
		}
	}

	for (let num in numMap) {
		if (numMap[num] > max) {
			max = numMap[num]
			maxNum = num;
		}
	}

	return parseInt(maxNum);
};