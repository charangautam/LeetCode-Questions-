/**
 * @param {number[]} nums
 * @return {number}
 */
 var minPairSum = function(nums) {
    let max = 0
    
    nums.sort((a,b) => a - b)
    let start = 0
    let end = nums.length - 1
    
    for(let i=0; i<nums.length/2; i++) {
        max = Math.max(max, nums[start] + nums[end])
        start++
        end--
    }
    
    return max
};