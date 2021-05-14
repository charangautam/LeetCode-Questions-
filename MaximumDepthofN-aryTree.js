/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    let output = 0
    
    if(!root) return output
    
    for(let i of root.children){
        output = Math.max(output, maxDepth(i))
    }
    return output+1
};