def first_recurringChar(str):
	counts = {}
	for char in str:
		if char in counts:
			return char
		else:
			counts[char] = 1
	return None