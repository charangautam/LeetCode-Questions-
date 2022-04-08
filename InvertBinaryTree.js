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
 * @return {TreeNode}
 */
var invertTree = function (root) {
    let queue = []
    queue.push(root)

    while (queue.length) {
        let curr = queue.shift()
        if (curr !== null) {
            [curr.left, curr.right] = [curr.right, curr.left]
            queue.push(curr.left)
            queue.push(curr.right)
        }
    }
    return root
};