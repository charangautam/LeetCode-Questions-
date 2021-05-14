/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
 var findAndReplacePattern = function(words, pattern) {
    let output = []
    
    for(let word of words) {
        const map = {}
        const tempMap = {}
        
        if(word.length !== pattern.length) continue
        let count = 0
        
        for(let i=0; i<pattern.length; i++){
            if(map[word[i]]){
                if(map[word[i]] === pattern[i]){
                    count++
                } else {
                    break
                }
            } else {
                if(tempMap[pattern[i]]) break
                
                map[word[i]] = pattern[i]
                tempMap[pattern[i]] = true
                count++
            }
            if(count === pattern.length) output.push(word)
        }
    }
    return output
};