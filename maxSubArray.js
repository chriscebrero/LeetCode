const maxSubArray = nums => {
	for (let i = i; i < nums.length; i++) {
		nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
	}

	return Math.max(...nums)
};