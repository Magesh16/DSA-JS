function largestSubarrayWithZeroSum(arr) {
    const map = new Map();
    let sum = 0;
    let maxLength = 0;
  
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
  
      if (sum === 0) {
        maxLength = i + 1;
      } else if (map.has(sum)) {
        maxLength = Math.max(maxLength, i - map.get(sum));
        console.log(sum+" "+maxLength+"  "+i);
      } else {
        map.set(sum, i);
      }
    }
  console.log(map);
    console.log(maxLength);
  }
let arr =[15,-2,2,-8,1,7,10,23];
  largestSubarrayWithZeroSum(arr);