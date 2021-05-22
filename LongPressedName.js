/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
 var isLongPressedName = function(name, typed) {
    let n=0;
    let t=0;
    
    while(t<typed.length){
        if(n < name.length && name[n] === typed[t]){
            n++;
            t++;
        } else if(t > 0 && typed[t-1] === typed[t]){
            t++;
        } else{
            return false;
        }
    }
    
    return n === name.length;
};