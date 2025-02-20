// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

 





let increasingTriplet = function(nums) {
    let c=0
    for(let i=0;i<nums.length;i++)
    {
        for(let j=i+1;j<nums.length;j++)
        {
            for(let k=j+1;k<nums.length;k++)
            {
                if(i<j<k && nums[i]<nums[j]<nums[k])
                {
                    return true
                }
            }
        }
    }
    return false
};
