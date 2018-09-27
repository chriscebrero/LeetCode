const containsDuplicates = nums => {
	if (nums.length == 0) {
		return false;
	}
	const set = new Set(nums);

	return !(set == nums.length)
};