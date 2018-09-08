class TreeNode {
	constructor(val) {
		this.val = val;
		this.right = null;
		this.left = null;
	}
}



const invertTree = root => {
	if (root == null) {
		return null;
	}

	const left = root.left;
	const right = root.right;

	root.left = right;
	root.right = left;

	invertTree(root.left);
	invertTree(root.right);

	return root


};