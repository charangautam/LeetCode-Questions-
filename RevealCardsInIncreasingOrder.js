/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    const sortedDeck = deck.sort((a,b) => b - a);
    result = [];
    result.unshift(sortedDeck.shift())

    for(card of sortedDeck){
        result.unshift(result.pop());
        result.unshift(card)
    }
    
    return result;
};