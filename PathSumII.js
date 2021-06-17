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
 * @return {number[][]}
 */
 var pathSum = function(root, targetSum) {
    let result = []
    dfs(root, targetSum, result)
    return result
};

const dfs = (node, sum, result, path=[]) => {
    if(!node) return 
    
    sum -= node.val
    
    path = path.concat(node.val)
    
    if(!node.left && !node.right && sum === 0) {
        result.push(path)
        return 
    }
    
    dfs(node.left, sum, result, path)
    dfs(node.right, sum, result, path)
    
}