/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// two pass solution
var sortColors = function(nums) {
    let i=0
    
    for(let j=0; j<nums.length; j++) {
        if(nums[j] === 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i++
        }
    }
    
    for(let k=i; k<nums.length; k++) {
        if(nums[k] === 1) {
            [nums[i], nums[k]] = [nums[k], nums[i]]
            i++
        }
    }
    
    return nums
};
