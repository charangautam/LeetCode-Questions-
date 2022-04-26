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
 * @return {number[]}
 

            1
        /       \
      null        2
                /   \
               3     null
             /   \
         null     null
      
     result = [1, 3, 2]
 */
var inorderTraversal = function(root) {
    let output = []
    
    const dfs = (node) => {
        if(!node) return
        
        if(node.left !== null) dfs(node.left)
        output.push(node.val)
        if(node.right !== null) dfs(node.right)
    }
    
    dfs(root)
    return output
};

// seperate functions

var inorderTraversal = function(root) {
    let result = [];
    inorder(root, result);
    return result;
};

function inorder(root, result) {
    if(root === null ) { return }

    inorder(root.left, result);
    result.push(root.val);
    inorder(root.right, result);
}
