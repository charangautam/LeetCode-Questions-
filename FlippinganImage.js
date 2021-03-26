/**
 * @param {number[][]} image
 * @return {number[][]}
 */
 var flipAndInvertImage = function(image) {
    let output = [];
    
    for(let i=0; i<image.length; i++){
        let changes = image[i].reverse();
        for(let x=0; x<changes.length; x++){
            if(changes[x] === 0){
                changes[x] = 1;
            } else{
                changes[x] = 0
            }
        }
        output.push(changes)
    }
    return output;
};