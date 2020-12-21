/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let start = 0;
    let end = numbers.length - 1;
    
    while(start<end){
        let addition = numbers[start] + numbers[end];
        if(addition === target){
            break;
        } else if (addition < target) {
            start++;
        } else {
            end--;
        }
    }
    
    return [start+1, end+1];
}