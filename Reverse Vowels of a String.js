/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let arr = [...s];
    let start = 0;
    let end = s.length - 1;
    
    while (start < end) {
        if (!isVowel(arr[start])){
            start++;
            
        } else if (!isVowel(arr[end])){
            end--;
        } else {
            let x = arr[start];
            arr[start] = arr[end];
            arr[end] = x;
            start++;
            end--;
        }
    }
    let result = '';
    for (let i=0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
};

let isVowel = (c) => {
    c = c.toLowerCase();
    return c === 'a' ||c === 'e' ||c === 'i' ||c === 'o' ||c === 'u';
}