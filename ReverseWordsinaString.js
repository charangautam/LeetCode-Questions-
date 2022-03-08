// first solution without built-in js functions
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let output = []
    let word = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            word.length > 0 && output.unshift(word.join(''))
            word = []
        } else {
            word.push(s[i])
        }
    }

    word.length > 0 && output.unshift(word.join(''))
    return output.join(' ')
};

// second solution with built-in js functions 
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    const output = s.split(' ').filter(i => i !== '').reverse().join(' ')
    return output
};