/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
 var getAllElements = function(root1, root2) {
    let arr1 = treeInts(root1);
    let arr2 = treeInts(root2);
    
    let ans = arr1.concat(arr2);
    ans = ans.sort((a,b) => a - b);
    
    return ans;
};

const treeInts = (wRoot) => {
    if(wRoot === null) return [];
    
    let result = [];
    let queue = [];
    queue.push(wRoot);
    
    while(queue.length > 0){
        let l = queue.length;
        let temp = 0;
        
        for(let i=0; i<l; i++){
            let curr = queue.shift();
            
            temp = curr.val;
            
            if(curr.left !== null) queue.push(curr.left);
            if(curr.right !== null) queue.push(curr.right);
            result.push(temp);
        }
    }
    return result;
}