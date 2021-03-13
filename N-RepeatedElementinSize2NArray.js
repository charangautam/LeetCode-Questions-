/**
 * @param {number[]} A
 * @return {number}
 */
 var repeatedNTimes = function(A) {
    let map = {};
    let count = 0;
    let ans = 0;
    
    for(let i=0; i<A.length; i++){
        if(map[A[i]]){
            map[A[i]]++;
        } else{
            map[A[i]] = 1;
        }
    }
     
    let keys = Object.keys(map);
    
    for(let k=0; k<keys.length; k++){
        if(map[keys[k]] > 1){
            ans = keys[k];
        }
    }
    return ans;
};