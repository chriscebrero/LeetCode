// Array - > Array
// Move all 0's to the end of the array
// Input: [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]
// 
const moveZeroes = nums => {
    y = 0; // y is none zero pointer

    // y only increase when i found a none zero number
    // i only swap if i found a none zero number
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            const tmp = nums[i];
            nums[i] = nums[y];
            nums[y] = tmp;
            y++;
        }
    }

    return nums;
};
console.log(moveZeroes([0,1,0,3,12]));

// 1st iteration: 0 so 0 stays in place
// 2nd Iteration: 
// tmp is nums[1] (Index of 1)
// nums[1](one) turns into nums[0] (zero)   <-- one and zero switch spots
// nums[0] (zero) goes into the initial index of 1 so the array looks like this [1, 0, 0, 3, 12]
// 
//3rd Iteration: 0 so nothing happens (y = 1)
//4th Iteration: tmp is nums[3] (which is value 3)
//nums[3] (three) switches into nums [1] (zero)
//nums[1] switches into tmp (initla index of three) so array looks like this [1, 3, 0, 0, 12]
//5th Iteration: tmp is nums[4] (12), and y = 2
// nums[4] (12) switches place with num[y] which is num[2] which is zero
// then nums[2] (zero) goes into the 12's original index which is at the end
// array now looks like this [1, 3, 12, 0, 0]

