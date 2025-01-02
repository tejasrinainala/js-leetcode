var productExceptSelf = function(nums) {
    let res=[];
    pro=1;
    for(let i=0;i<nums.length;i++)
    {
        pro=1;
        for(let j=0;j<nums.length;j++)
        {
            if(i==j)
            {
                continue;
            }
            else
            {
                pro=pro*nums[j]
            }
        }
        res.push(pro)
    }
    return res;
};
