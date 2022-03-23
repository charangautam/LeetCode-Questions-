/**
 * @param {number[]} nums
 * @return {number[]}
 */
// built in JS function 
 var getConcatenation = function(nums) {
    return nums.concat(nums)
};

// spread operator 
var getConcatenation = function(nums) {
    return [...nums, ...nums]
};

// brute
var getConcatenation = function(nums) {
    let l = nums.length;
    
    for(let i=0; i<l; i++){
        nums.push(nums[i]);
    }
    
    return nums;
};
