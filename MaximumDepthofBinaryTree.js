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
var maxDepth = function(root) {
    if(root === null) return 0;
    
    let count = 0;
    
    const depth = (curr, height) => {
        if(curr === null) return;

        if(curr.left === null && curr.right === null){
            if(height > count){
                count = height;
            } 
        }

        depth(curr.left, height + 1)
        depth(curr.right, height + 1)
    }
    
    depth(root, 1);
    return count;
};
