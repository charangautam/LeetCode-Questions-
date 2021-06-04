/**
 * @param {number[]} nums
 * @return {number}
 */
 var findDuplicate = function(nums) {
    const map = {}
    let output = 0
    
    for(let num of nums) {
        if(map[num]) {
            output = num
        } else {
            map[num] = 1 
        }
    }
    
    return output
};