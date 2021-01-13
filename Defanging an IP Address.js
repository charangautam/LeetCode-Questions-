/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let arr = address.split('.');
    let str = '';
    
    for(let i=0; i<arr.length; i++){
        str += arr[i];
        
        if(i != (arr.length -1)){
            str += '[.]'
        }
    }
    
    return str;
};