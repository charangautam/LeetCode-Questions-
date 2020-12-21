/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let start = 0;
    let end = height.length - 1;
    let maxArea = 0;
    
    while (start<end){
        let area = 0;
        if(height[start] < height[end]) {
            area = height[start] * (end-start);
            start++;
        } else {
            area = height[end] * (end-start);
            end--;
        } 
        
        if (area > maxArea) {
            maxArea = area;
        }
        
    }
    return maxArea;
      
};