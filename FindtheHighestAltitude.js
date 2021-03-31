/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let count = 0;
    let n = 0;
    
    for(let i=0; i<gain.length; i++){
        count += gain[i];
        
        if(count > n){
            n = count;
        }
    }
    
    return n;  
};