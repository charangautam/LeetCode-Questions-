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
 var sumEvenGrandparent = function(root) {
    let sum = [0];
    dfs(root, -1, -1, sum);
    return sum[0];
};

const dfs = (root, par, gran, sum) => {
    if(root === null) return;
    
    if(gran % 2 == 0) sum[0] += root.val; 
    
    dfs(root.left, root.val, par, sum)
    dfs(root.right, root.val, par, sum)
}

