/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
    let output = 0

    for (let operation of operations) {
        if (operation === "X++" || operation === "++X") {
            output++
        } else {
            output--
        }
    }

    return output
};