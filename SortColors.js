/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
*/

var sortColors = function(nums) {
    let i = 0;
    let arr = [];
    
    while (i < nums.length) {
        switch(nums[i]) {
            case 0:
                arr.unshift(nums.splice(i, 1));
                break;
            case 1:
                arr.push(nums.splice(i, 1));
                break;
            default:
                i++;
                break;
        }
    }
    
    nums.unshift(...arr);
};