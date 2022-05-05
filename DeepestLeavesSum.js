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
    let deepestLevel = 0
    
    const dfs = (node, index) => {
        if(!node) return
        
        if(index === deepestLevel) output += node.val
        
        if(index > deepestLevel) {
            deepestLevel = index
            output = node.val
        }
        
        dfs(node.left, index + 1)
        dfs(node.right, index + 1)
    }
    
    dfs(root, 0)
    return output
};
