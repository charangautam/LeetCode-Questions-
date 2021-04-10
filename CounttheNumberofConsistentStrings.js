// /**
//  * @param {string} allowed
//  * @param {string[]} words
//  * @return {number}
  
var countConsistentStrings = function(allowed, words) {
    let count = 0;
  
    for(let word of words){
         let i = 0;
        while(i < word.length){
            if(!allowed.includes(word[i])) break;
            i++;
        }
        
        if(i === word.length) count++
    }
    return count;
};

