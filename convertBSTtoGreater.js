const convertBST = root => {
	const dfs = node => {
		if (node == null) {
			return;
		} else {
			dfs(node.right);
			node.val += dfs.total;
			dfs.total = node.val;
			dfs(node.left);
		}
	};
	dfs.total = 0;
	dfs(root)
	return root
};