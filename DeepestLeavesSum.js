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
 var deepestLeavesSum = function(root) {
    let output = 0
    let count = 0
    
    const dfs = (node, i) => {
        if(!node) return
        
        if(count === i) output += node.val
        
        if(i > count) {
            count = i
            output = node.val
        }
        
        dfs(node.left, i+1)
        dfs(node.right, i+1)
    }
    
    dfs(root, 0)
    return output
};