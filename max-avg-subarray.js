var findMaxAverage = function (nums, k) {
    let s = 0;


    for (let i = 0; i < k; i++) {
        s += nums[i];
    }

    let maxSum = s;


    for (let i = k; i < nums.length; i++) {
        s = s + nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, s);
    }

    return maxSum / k;
};
