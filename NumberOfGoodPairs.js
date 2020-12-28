/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let count = 0;
    let map = Array(101);
    map.fill(0);
    for (let i=0; i < nums.length; i++) {
        map[nums[i]]++;
        if (map[nums[i]] > 1 ) {
            count += map[nums[i]] - 1;
        }
    }
    return count;
};