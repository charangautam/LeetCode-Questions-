/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let output = [];
    let count = 0;
    
    for(let i=0; i<nums.length; i++){
        for(let x=0; x<nums.length; x++){
            if(nums[i]>nums[x]) count++;
        }
        output.push(count);
        count = 0;
    }
    return output;
};
