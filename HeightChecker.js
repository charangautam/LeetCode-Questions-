/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let count = 0;
    let org_array = [...heights];
    heights.sort((a,b) => a - b);
    for (let i=0; i<heights.length; i++) {
        if (heights[i] === org_array[i]) {
            // pass
        } else {
            count++;
        }
    }
    return count;
};