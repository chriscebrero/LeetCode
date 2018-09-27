function mergeTwoLinkedLists(l1, l2) {
	let l = new ListNode(null);
	const preHead = l;

	while (l1 && l2) {
		if (l1.val < l2.val) {
			l.next = l1;
			l1 = l1.next;
		} else {
			l.next = l2;
			l2 = l2.next;
		}

		l = l.next;
	}

	l.next = l1 || l2;

	return preHead.next;
}
