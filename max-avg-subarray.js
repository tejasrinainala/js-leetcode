// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.





let findMaxAverage = function (nums, k) {
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
