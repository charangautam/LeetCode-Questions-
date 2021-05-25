/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if (!root) return []
    
    const output = []
    const queue = [root]
    
    while (queue.length > 0) {
        let size = queue.length;
        const temp = [];
        
        while(size > 0) {
            const { val, children } = queue.shift()
            temp.push(val)
            
            children.map(child => queue.push(child))
            
            size--
        }
        output.push(temp)
    }
    return output;
};