let s1 = "aabcc";
let s2 = "dbbca";
let s3 = "aadbbcbcac";

var isInterleave = function(s1, s2, s3) {
    const n = s1.length 
    const m = s2.length 
    const k = s3.length 
    if (n + m !== k) return false 
    
    const dp = new Array(m+1).fill(false)
    dp[0] = true
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= m; j++) {
            if (i && !j) {
                dp[j] = dp[j] && s1[i-1] === s3[i-1]
            } else if (!i && j) {
                dp[j] = dp[j-1] && s2[j-1] === s3[j-1]
            } else {
                dp[j] = (dp[j] && s1[i-1] === s3[i+j-1]) || (dp[j-1] && s2[j-1] === s3[i+j-1])
            }
        }
    }
    
    return dp[m]
};

// var isInterleave = function(s1, s2, s3) {
//     if (s1.length + s2.length !== s3.length)
//         return false;

//     const memo = new Set();
//     return (function interleave(i, j, k) {
//         const key = i + s1.length ** 4 * j;
//         // console.log(key);
//         if (memo.has(key))
//             return false;
//         if (i === s1.length && j === s2.length)
//             return true;
//         if (s1[i] === s3[k] && interleave(i+1, j, k+1))
//             return true;
//         if (s2[j] === s3[k] && interleave(i, j+1, k+1))
//             return true;
//         memo.add(key);
//         return false;
//     })(0, 0, 0);
// };

console.log(isInterleave(s1,s2,s3));