let str1 ="ABCDEF";
let str2 ="ACDEXR";
let n1 = str1.length;
let n2  =str2.length;
let dp =new Array(n1);
for(let i=0;i<=n1;i++){
    dp[i] = new Array(n2+1).fill(0);
}
let res=""
for(let i=1;i<n1;i++){
    for(let j=1;j<n2;j++){
        if(str1[i-1] == str2[j-1]){
            dp[i][j] = 1+dp[i-1][j-1];
            if(dp[i-1][j-1]<dp[i][j]){
                res+=str2[i-1]
            }
        }else{
            dp[i][j] =0;
        }
    }
}
console.log(res);