/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let map = {};
    let count = 0;
    
    for(let i=0; i<items.length; i++){
        let item = items[i];

        map['type'] = item[0];
        map['color'] = item[1];
        map['name'] = item[2];
        
        if(map[ruleKey] === ruleValue) count++;
    }
    return count;
};