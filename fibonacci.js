const fibonacci = n => {
	if (n<= 1) {
		return n;
	} else {
		return fibonacci(n - 1) + fibonacci(n - 2);
	}
};

/* O(2^n)

*/


const fibonacci2 = n => {
	const fibo = [0, 1];

	if (n <= 2) return 1;

	for (let i = 2; i <= n; i++) {
		fibo[i] = fibo[i-1] + fibo[i - 2];
	}

	return fibo[n];
};

