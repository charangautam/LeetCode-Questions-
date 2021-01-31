/**
 * @param {string} 
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = {};
    let index = -1;
    
    for(let i=0; i<s.length; i++){
        if(map[s[i]]){
            map[s[i]] += 1
        } else{
            map[s[i]] = 1;
        }
    }
    
    for(let i=0; i<s.length; i++){
        if(map[s[i]]===1){
            index = i;
            break
        }
    }
    
    return index;
       
};