function missingNumber(nums) {
	let s = [];

	for (let num of nums) {
		s.push(num);
	}

	for (let i = 0; i <= nums.length; i++) {
		if (!s.includes(i)) {
			return i;
		}
	}

	return -1;
}