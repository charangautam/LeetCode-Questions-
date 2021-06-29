/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let map = {}
    let output = 0
    
    for(let num of nums) {
        map[num] = map[num] + 1 || 1
    }
    
    for(let num of nums) {
        if(map[num] === 1) output += num
    }
    
    return output
};