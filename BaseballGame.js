/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    let stack = [];
    let output = 0;
    
    for(let i=0; i<ops.length; i++){
        if(ops[i]==='C'){
            stack.shift();
            
        } else if(ops[i]==='D'){
            let multiply = stack[0] * 2;
            stack.unshift(multiply);
            
        } else if(ops[i]==='+'){
            let addition = stack[0] + stack[1];
            stack.unshift(addition);
            
        } else{
            stack.unshift(parseInt(ops[i]));
        }
    }
    
    for(let i=0; i<stack.length; i++){
        output += stack[i];
    }
    
    return output;
};