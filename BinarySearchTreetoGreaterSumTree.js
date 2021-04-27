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
 * @return {TreeNode}
 */
var bstToGst = function(root) {
    let sum = 0
    
    const dfs = (root) => {
        if(root === null) return
        dfs(root.right)
        root.val += sum
        sum = root.val
        dfs(root.left)
    }
    
    dfs(root)
    return root
};