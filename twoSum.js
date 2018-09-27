var twoSum = function(nums, target) {
	for (var i = 0;, i < nums.length; i++) {
		for (var j = 0; j < nums.length; j++) {
			if (nums[j] == target - nums[i]) {
				return [i, j];
			}
		}
	}
}

