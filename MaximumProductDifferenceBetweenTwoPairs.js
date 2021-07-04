/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProductDifference = function(nums) {
    nums.sort((a,b) => b - a)
    let end = nums.length - 1
    let output = (nums[0] * nums[1]) - (nums[end] * nums[end-1])
    return output
};