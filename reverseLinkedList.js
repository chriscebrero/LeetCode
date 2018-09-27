const reverseList = head => {
	let prev = null;
	let curr = head;
	while (curr != null) {
		const save = curr.next;
		curr.next = null;
		prev = curr;
		curr = save;
	}

	return prev;
};