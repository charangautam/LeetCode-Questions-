/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
    let output = 0
    let count = 0

    for (let sentence of sentences) {
        count = sentence.split(' ').length
        output = Math.max(count, output)
    }

    return output
};