/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDuplicates = function(nums) {
    let map = {};
    let output = [];
    
    for(let num of nums){
        if(map[num]){
            map[num] += 1
        } else {
            map[num] = 1
        }
        
        if(map[num] === 2) output.push(num);
        
    }
    return output
};