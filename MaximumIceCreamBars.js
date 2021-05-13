/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function(costs, coins) {
    let output = 0
    
    costs = costs.sort((a,b) => a - b)
    
    for(let cost of costs){
        if(coins - cost >= 0){
            coins = coins - cost
            output++
        } 
    }
    return output
};