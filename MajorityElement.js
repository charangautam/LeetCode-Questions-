/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = {}
    
    for(let num of nums){
        if(map[num]){
            map[num] += 1
        } else{
            map[num] = 1
        }
    }
    
    let result = 0

    Object.keys(map).forEach(k => {
        if(map[k] > (nums.length/2)){
            result = k
        }
    })
    
    return result
};