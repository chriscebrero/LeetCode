const removeElements = (head, val) => {
	const results = [];

	while(head) {
		if(head.val !== val) {
			results.push(head.val);
		}
		head = head.next;
	}
	return results;
};