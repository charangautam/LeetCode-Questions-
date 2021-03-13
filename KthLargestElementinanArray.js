/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
    nums.sort((a,b) => b - a);
    k = k - 1;
    
    let ans = 0;

    if(nums[k]){
        ans = nums[k];
    }
    
    return ans;
};
