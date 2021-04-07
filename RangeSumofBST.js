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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    return dfs(root, low, high)
};

const dfs = (root, low, high, count = [0]) => {
    if(!root) return count[0]
    
    if(root.val >= low && root.val <= high) count[0] += root.val
    
    dfs(root.left, low, high, count)
    dfs(root.right, low, high, count)
    return count[0]
}

