function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var buildTree = function (inorder, postorder) {
    if (inorder.length == 0) {
        return null
    }

    var root = new TreeNode(postorder[postorder.length - 1])
    var rootIdxInorder = inorder.indexOf(root.val)

    var leftInorder = inorder.slice(0, rootIdxInorder)
    var rightInorder = inorder.slice(rootIdxInorder + 1)

    var leftPostorder = postorder.slice(0, leftInorder.length)
    var rightPostorder = postorder.slice(leftInorder.length, -1)

    root.left = buildTree(leftInorder, leftPostorder)
    root.right = buildTree(rightInorder, rightPostorder)

    return root
};

buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3])
