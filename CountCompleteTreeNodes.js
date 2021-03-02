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
var countNodes = function(root) {
    let count = 0;
    
    if(root === null) return 0;
    
    let queue = [];
    queue.push(root);
    
    while(queue.length > 0){
        let l = queue.length;
        let temp = [];
        
        for(let i=0; i<l; i++){
            let curr = queue.shift();
            temp.push(curr.val);
            
            if(curr.left !== null) queue.push(curr.left);
            if(curr.right !== null) queue.push(curr.right);
        }
        count += temp.length;
    }
    return count;
};