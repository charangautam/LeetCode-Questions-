/**
 * @param {string[][]} paths
 * @return {string}
 */

var destCity = function(paths) {
    const cityMap = new Map(paths)

    start = paths[0][0]
    
    while(cityMap.has(start)){
        start = cityMap.get(start)
    }
    return start
};
