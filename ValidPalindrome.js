/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    if (s.length == 0) return true;
    
    s = s.toLowerCase().replace(/[^a-z0-9]/gi,'');
    
    let newStr = s.split('').reverse().join('')
    
    for(let i=0; i<s.length; i++){
        if(newStr[i] !== s[i]) return false 
    }
    
    return true 
};
