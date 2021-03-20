/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var countSubstrings = function(s, t) {
    let output = 0;
    
    for(let i=0; i<s.length; i++){
        for(let j=0; j<t.length; j++){
            
            let x = i;
            let y = j;
            let count = 0;
            
            while(x < s.length && y < t.length){
                if(s[x] != t[y]) count++;
                if(count == 1) output++;
                if(count == 2) break;
                
                x++;
                y++;
            }
        }
    }
    return output;
};
