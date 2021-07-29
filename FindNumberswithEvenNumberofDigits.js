/**
 * @param {number[]} nums
 * @return {number}
 */
 var findNumbers = function(nums) {
    let ans = nums.filter(num => num.toString().length % 2 === 0)
    return ans.length
};