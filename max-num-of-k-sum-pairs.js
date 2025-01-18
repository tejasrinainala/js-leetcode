// You are given an integer array nums and an integer k.

// In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

// Return the maximum number of operations you can perform on the array.

 








var maxOperations = function(nums, k) {
    let count = 0;
    const map = new Map();

    for (let num of nums) {
        let complement = k - num;

        if (map.get(complement) > 0) {
            count++;
            map.set(complement, map.get(complement) - 1);
        } else {
            map.set(num, (map.get(num) || 0) + 1);
        }
    }

    return count;
};
