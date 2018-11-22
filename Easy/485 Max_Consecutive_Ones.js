/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) 
{
    let a = 0;
    let b = 0;
    for ( var i = 0; i<nums.length; i++)
        {
            if(nums[i]==1)
                {
                    a = a+1
                }
            else
            {
                b = Math.max(a,b)
                a = 0
            }
        }
    b = Math.max(a,b);
    return b;
    
};
