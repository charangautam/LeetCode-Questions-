/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let a = 1;
    let b = 1;
    
    for (let i = 2; 4 <= n; i++) {
        const t = a + b;
        a = b;
        b = t;
    }   
    return b;
};
