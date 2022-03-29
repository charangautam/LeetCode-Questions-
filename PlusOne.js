/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i]++
        if (digits > 9) {
            digits[i] = 0
        } else {
            return digits
        }
    }
    digits.unshift(1)
    return digits
};

// another solution
var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++
            return digits
        }
        digits[i] = 0
    }
    digits.unshift(1)
    return digits
}