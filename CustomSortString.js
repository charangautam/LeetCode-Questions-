/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
 var customSortString = function(S, T) {
    let map = {}
    let newChars = ''
    let output = ''
    
    for(let s of S) {
        map[s] = []
    }
    
    for(let t of T) {
        if(map[t]) {
            map[t].push(t)
        } else {
            newChars += t
        }
    }

    for(let s of S) {
       map[s].forEach(val => {
           output += val
       })
    }
    
    return output + newChars  
};