/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    let map = {};
    let changes = 0;
    
    for(let i=0; i<s.length; i++){
        map[s[i]] ? map[s[i]]++ : map[s[i]] = 1; 
    }
    
    for(let i=0; i<t.length; i++){
        map[t[i]] ? map[t[i]]-- : changes++;
    }
    
    return changes;
};