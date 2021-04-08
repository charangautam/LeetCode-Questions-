/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let map = {
        'G': 'G',
        '()': 'o',
        '(al)': 'al'
    }
    
    let temp = ''
    let output = ''
    
    for(let i of command){
        temp += i
        if(map[temp]){
            output += map[temp]
            temp = ''
        }
    }
    return output
};