/**
 * @param {string} s
 * @return {string}
 */
 var sortSentence = function(s) {
    let strSplit = s.split(' ') 
    let result = []
    
    for(let word of strSplit){
        let digit = word[word.length-1]
        result[digit-1] = word.substr(0, word.length - 1);
    }
    
    return result.join(' ');    
};