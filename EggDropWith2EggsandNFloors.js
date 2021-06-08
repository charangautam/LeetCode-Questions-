/**
 * @param {number} n
 * @return {number}
 */
 var twoEggDrop = function(n) {
    return Math.ceil((Math.sqrt(8 * n + 1) - 1) / 2)
};