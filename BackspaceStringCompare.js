/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    let stack1 = [];
    let stack2 = [];
    
    for(let i=0; i<S.length; i++){
        if(S[i] === '#'){
            stack1.shift();
        } else{
            stack1.unshift(S[i]);
        }
    }
    
    for(let i=0; i<T.length; i++){
        if(T[i] === '#'){
            stack2.shift();
        } else{
            stack2.unshift(T[i]);
        }
    }
    
    if(stack1.length != stack2.length){
        return false;
    }
    
    for(let c=0; c<stack1.length; c++){
        if(stack1[c] === stack2[c]){
            continue;
        } else{
            return false;
        }
    }
    
    return true;
};


