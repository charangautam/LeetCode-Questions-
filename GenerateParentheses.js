/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    let output = []
    
    const generate = (left, right, str) => {
        if(!left && !right && str.length) return arr.push(str)
        if(left) generate(left - 1, right, str + '(')
        if(right > left) generate(left, right - 1, str + ')')
    }
    
    generate(n, n, '')
    return output
};