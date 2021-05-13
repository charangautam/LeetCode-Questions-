/**
 * @param {string} s
 * @return {string}
 */
 var frequencySort = function(s) {
    let map = {}
    let output = ''
    
    for(let i of s) map[i] = map[i] + 1 || 1
    
    let sortedKeys = Object.keys(map).sort((a,b) => map[b] - map[a])
    
    for(let key of sortedKeys) output += key.repeat(map[key])
    
    return output
};