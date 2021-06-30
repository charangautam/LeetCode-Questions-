/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let start = 0, output = 0;
    const map = {};
  
    for(let i = 0; i < s.length; i++) {
        if(map[s[i]] >= start) start = map[s[i]] + 1;
        map[s[i]] = i
      
        output = Math.max(output, i - start + 1);
    }
  
    return output;
  };