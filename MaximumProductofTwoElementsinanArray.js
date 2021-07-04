/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
    nums.sort((a,b) => b - a)
    let output = (nums[0]-1) * (nums[1]-1)
    return output 
};