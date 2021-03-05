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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let result = [];
    
    if(root === null) return result;
    
    let queue = [];
    queue.push(root);
    let num = 0;
    
    while(queue.length > 0){
        let l = queue.length;
        let temp = [];
        
        for(let i=0; i<l; i++){
            let current = queue.shift();
            
            if(num % 2 === 0){
                temp.push(current.val);
            } else{
                temp.unshift(current.val);
            }
            
            if(current.left !== null) queue.push(current.left);
            if(current.right !== null) queue.push(current.right);
            
        }
        num++;
        result.push(temp);
    }
    return result;
};