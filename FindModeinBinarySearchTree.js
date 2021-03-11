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
var findMode = function(root) {
    let result = [];
    let map = {};
    
    if(root === null) return result;
    
    let queue = [];
    queue.push(root);
    
    while(queue.length > 0){
        let l = queue.length;
        
        for(let i=0; i<l; i++){
            let curr = queue.shift();
            
            if(map[curr.val]){
                map[curr.val] += 1
            } else{
                map[curr.val] = 1
            }
            
            if(curr.left !== null) queue.push(curr.left);
            if(curr.right !== null) queue.push(curr.right);
        }
    }
    let mode = 0;
    
    Object.keys(map).forEach(key => {
          if(map[key] > mode){
              mode = map[key]
          }
    });
    
    Object.keys(map).forEach(key => {
        if(map[key] === mode){
            result.push(key);
        }
    });
    
    return result;
};