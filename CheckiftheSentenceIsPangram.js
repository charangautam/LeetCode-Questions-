/**
 * @param {string} sentence
 * @return {boolean}
 */
 var checkIfPangram = function(sentence) {
    let alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
                     'n','o','p','q','r','s','t','u','v','w','x','y','z']
    
    let set = new Set(alphabets)
    
    for(let letter of [...sentence]) {
        if(set.has(letter)) set.delete(letter)
    }
    
    return set.size === 0 ? true : false
};