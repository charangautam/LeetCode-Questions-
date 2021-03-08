/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let map = {};
    let check = {};
    
    for(let i=0; i<arr.length; i++){
        if(map[arr[i]]){
            map[arr[i]] += 1;
        } else{
            map[arr[i]] = 1;
        }
    }
    
    let values = Object.values(map);
    
    for(let x=0; x<values.length; x++){
        if(check[values[x]]) return false;
        check[values[x]] = true;
    }
    return true;
};