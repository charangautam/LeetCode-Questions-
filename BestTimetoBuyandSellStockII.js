/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let output = 0;
    
    for(let i=0; i<prices.length; i++){
        j = i+1;
        
        if(prices[i] < prices[j]) output += prices[j] - prices[i]
    }
    return output;
};