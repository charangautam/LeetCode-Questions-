/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    let total = ((nums.length + 1) * nums.length)/2
    let sum = 0
    
    for(let num of nums){
        sum += num
    }
    
    return total - sum 
}; 