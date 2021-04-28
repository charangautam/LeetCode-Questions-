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
var goodNodes = function(root) {
    let count = 0
    
    const dfs = (node, goodNumber) => {
        if(!node) return
        if(node.val >= goodNumber) {
            count++  
            goodNumber = node.val
        }
        dfs(node.left, goodNumber)
        dfs(node.right, goodNumber)
    }
    
    dfs(root, Number.MIN_SAFE_INTEGER)
    return count
};