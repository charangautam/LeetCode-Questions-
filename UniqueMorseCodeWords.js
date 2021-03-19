/**
 * @param {string[]} words
 * @return {number}
 */
 var uniqueMorseRepresentations = function(words) {
    const morseMap = { a: ".-", b: "-...", c: "-.-.", d: "-..", e: ".", f: "..-.", g: "--.", h: "....", i: "..", j: ".---", k: "-.-", l: ".-..", m: "--", n: "-.", o: "---", p: ".--.", q: "--.-", r: ".-.", s: "...", t: "-", u: "..-", v: "...-", w: ".--", x: "-..-", y: "-.--", z: "--.." }
    
    const tempMap = {};
    let arr = [];
    let str = '';
    
    for(let i=0; i<words.length; i++){
        let word = words[i];
        for(let c=0; c<word.length; c++){
            if(morseMap[word[c]]) {
                str += morseMap[word[c]];
            } else{
                return 0;
            }
        } 
        arr.push(str);
        str = ''
    }
    
    for(let x=0; x<arr.length; x++){
        if(!tempMap[arr[x]]) tempMap[arr[x]] = true;
    }
    
    let output = Object.keys(tempMap).length;
    
    return output;
};