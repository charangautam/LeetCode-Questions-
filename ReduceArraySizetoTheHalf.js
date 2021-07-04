/**
 * @param {number[]} arr
 * @return {number}
 */
 var minSetSize = function(arr) {
    const map = {}
    
    for(let i of arr) {
        map[i] = map[i]+1 || 1
    }
    
    let values = Object.values(map).sort((a,b) => b - a)
    let count = 0
    let output = 0
    
    for(const val of values) {
        count += val
        output++
        if(count >= arr.length/2) return output
    }
};