/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
 var countCharacters = function(words, chars) {
    let map = {};
    let result = 0;
    
    for(let i=0; i<chars.length; i++){
        if(map[chars[i]]){
            map[chars[i]] += 1;
        } else{
            map[chars[i]] = 1;
        }
    }
    
    for(let x=0; x<words.length; x++){
        let compareMap = {...map};
        let word = words[x];
        let valid = true;
        for(let y=0; y<word.length; y++){
            if(compareMap[word[y]] && compareMap[word[y]] > 0){
                compareMap[word[y]]--;
            } else{
                valid = false;
                break;
            }
        }
        
        if(valid) result += word.length;
    }
    
    return result;
};
