/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let arr = s.split('')
    let start = 0
    let end = s.length - 1

    while (start < end) {
        if (!isVowel(arr[start])) {
            start++
        } else if (!isVowel(arr[end])) {
            end--
        } else {
            let temp = arr[start]
            arr[start] = arr[end]
            arr[end] = temp
            start++
            end--
        }
    }
    return arr.join('')
};

const isVowel = (letter) => {
    letter = letter.toLowerCase()
    return letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'
}