/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var increasingTriplet = function(nums) {
    let min = nums[0]
    let min2 = Infinity
    
    for(let num of nums) {
        if(num <= min) {
            min = num
        } else if(num <= min2) {
            min2 = num
        } else {
            return true
        }
    }
    return false
};
