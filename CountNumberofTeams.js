/**
 * @param {number[]} rating
 * @return {number}
 */
 var numTeams = function(rating) {
    let count = 0;
    let lgh = rating.length;
    
    for(let i=0; i<lgh; i++){
        for(let j=i+1; j<lgh; j++){
            for(let k=j+1; k<lgh; k++){
                if(rating[i]<rating[j] && rating[j]<rating[k] ||
                   rating[i]>rating[j] && rating[j]>rating[k] ) count++;
            }
        }
    }
    return count;
};