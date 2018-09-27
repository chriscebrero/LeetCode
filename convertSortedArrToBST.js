class TreeNode {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

function convertSortedArrToBST(nums) {

	if (!nums.length) {
		return null;
	}

	const middle = Math.floor((nums.length) / 2);
	const root = new TreeNode(middle);

	root.left = convertSortedArrToBST(nums.slice(0, middle));
	root.right = convertSortedArrToBST(nums.slice(middle + 1));

	return root;

}