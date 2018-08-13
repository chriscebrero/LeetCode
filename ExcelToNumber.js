const titleToNumber = s => {
    let res = 0;
    for (let i = 0, l = s.length; i < l; i++) {
        const num = s[i].charCodeAt() - 64;
        res += num * (26 ** (s.length - i - 1));
    }
    return res;
};

console.log(titleToNumber("AB"))

//1st Iteration: "A"
// num = 65 - 64 = 1 ("A" is char code 65)
// res += 1 * Math.pow(26, 2 - 0 - 1) 
// res += 1 * Math.pow(26, 1)
// res = 26
// 2nd Iteration: "B"
// num = 66 - 64 = 2
// res += 2 * Math.pow(26, 2 - 1 - 1)
// res += 2 * Math.pow(26, 0)
// res += 26 + 2
// res = 28
// 

console.log(titleToNumber("AE"))
//1st Iteration:
//res = 26
//2nd Iteration
//69 - 64 = 5 ("E" is char code 69)
//res += 5 * Math.pow(26, 2 - 1 - 1)
//res += 5 * Math.pow(26, 0)
//res = 26 + 5
//res = 31