/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var buildArray = function(nums) {
    let output = []
    
    for(let num of nums) {
        output.push(nums[num])
    }
    
    return output
};