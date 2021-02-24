/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {};
    const l = nums.length;
    
    for (let i = 0; i<l; i++){
        let x = target - nums[i];
        if(map[x] >= 0){
            return [map[x], i]
        }
        
        map[nums[i]] = i;
    }
};
