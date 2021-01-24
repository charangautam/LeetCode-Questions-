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