/**
 * @param {string} target
 * @return {number}
 */
 var minFlips = function(target) {
    let prev = '0';
    let arr = [...target];
    let count = 0;
    
    for(let i=0; i<arr.length; i++){
        if(arr[i] != prev) {
            prev = arr[i];
            count++;
        }
    }
    return count;
};
