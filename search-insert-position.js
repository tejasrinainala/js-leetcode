var searchInsert = function (nums, target) {
    if (nums.includes(target)) {
        return nums.indexOf(target)
    }
    else {
        for (i = 0; i < nums.length; i++) {
            if (nums[i] > target) {
                return i;
            }
            else if (i === nums.length - 1) {
                return i + 1;
            }
        }
    }
};
