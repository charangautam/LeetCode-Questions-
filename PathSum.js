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
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
    let output = false
    
    const dfs = (node, count) => {
        if(!node) return
        count += node.val
        if(count === targetSum && 
           node.right === null && 
           node.left === null) output = true
        dfs(node.left, count)
        dfs(node.right, count)
    }
    
    dfs(root, 0)
    return output
};