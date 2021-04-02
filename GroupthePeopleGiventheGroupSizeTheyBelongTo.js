/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    const map = {};
    let output = [];
    
    for(let i=0; i<groupSizes.length; i++){
        let groupSize = groupSizes[i]
        
        if(map[groupSize]){
            map[groupSize].push(i)
        } else {
            map[groupSize] = [i];
        }
        
        if(map[groupSize].length === groupSize){
            output.push(map[groupSize])
            delete map[groupSize]
        }
    }
    return output
};