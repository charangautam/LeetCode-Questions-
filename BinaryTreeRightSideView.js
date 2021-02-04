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
 */
var rightSideView = function(root) {
    
    let result = [];
    
    if (root === null) return result;
    
    let queue = [];
    queue.push(root);
    
    while(queue.length > 0){
        let l = queue.length;
        let temp = 0;
        
        for(let i=0; i<l; i++){
            let current = queue.shift();
            temp = current.val;
            
            if(current.left !== null) queue.push(current.left);
            if(current.right !== null) queue.push(current.right);
        }
        result.push(temp);
    }
    return result;
};