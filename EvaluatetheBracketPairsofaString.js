/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
 var evaluate = function(s, knowledge) {
    const map = {}
    
    for(let [key, val] of knowledge) {
        map[key] = val
    }
    
    let output = ''
    let temp = ''
    let flag = false
    
    for(let i of s) {
        if(flag) {
            if(i === ')'){
                if(map[temp]) {
                    output += map[temp]
                } else {
                    output += '?'
                }
                temp = ''
                flag = false
            } else {
                temp += i
            }
        } else if(i === '(') {
            flag = true
        } else {
            output += i
        }
        
    }
    return output
};