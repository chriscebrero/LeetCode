// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Note: A leaf is a node with no children

function TreeNode(val) {
	this.val = val;
	this.left = null;
	this.right = null;
}

const maxDepth = root => {

	if (root === null) {
		return 0;
	}
	const left = maxDepth(root.left);
	const right = maxDepth(root.right);
	return (Math.max(left, right) + 1);
};

    // 3
 //   / \   <--  + 1
 //  9  20  // Total: 1
 //    /  \ <-- + 1
 //   15   7 <-- Total : 2
 //          <-- Math.max(1, 2) + 1
 //          Max Depth = 3

const a = new TreeNode(3);
const b = new TreeNode(9);
const c = new TreeNode(20);
const d = new TreeNode(15);
const e = new TreeNode(7);
a.left = b
a.right = c
c.left = d
c.right = e

console.log(maxDepth(a))
