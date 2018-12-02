/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * Method 1
 */
var moveZeroes = function(nums) {
    var j = 0;
    for(var i = 0; i < nums.length; i++) {
        if(nums[i] != 0) {
            var temp = nums[j];
            nums[j] = nums[i];
            nums[i] = temp;
            j++;
        }
    }
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * Method 2
 */
var moveZeroes = function(nums) {
    for(let i =0, j=0; i<nums.length; i++){
        if(nums[j]==0){
            nums.splice(j,1);
            nums.push(0);
        }
        else{
            j++;
        }
    }
};
