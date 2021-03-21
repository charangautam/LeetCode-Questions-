/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    n = n.toString();
    
    let product = 1;
    let sum = 0;
    
    for(let i=0; i<n.length; i++){
        product *= n[i]
    }
    
    for(let i=0; i<n.length; i++){
        sum += parseInt(n[i])
    }
    
    let result = product - sum;
    return result;
};