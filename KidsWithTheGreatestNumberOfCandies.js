/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max=Math.max.apply(Math,candies);
    let a = [];
    for (i=0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= max) {
            a.push(true);
        } else {
            a.push(false);
        }
    }
    return a;
};