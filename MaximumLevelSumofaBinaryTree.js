/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxLevelSum = function (root) {
    if (root === null) return 
    
    const queue = [root]
    
    let globalSum = Number.MIN_SAFE_INTEGER
    let globalLevel = 1
    let currLevel = 1
    
    while (queue.length > 0) {
        const size = queue.length
        let currSum = 0
        
        for (let i=0; i<size; i++) {
            let currNode = queue.shift()
            currSum += currNode.val

            if (currNode.left !== null) queue.push(currNode.left)
            if (currNode.right !== null) queue.push(currNode.right)
        }

        if (currSum > globalSum) {
            globalSum = currSum
            globalLevel = currLevel
        }
        
        currLevel++
    }
    return globalLevel
};