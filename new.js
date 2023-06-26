
// let customArr = (nums)=>{
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]<nums[i+1]){
//             nums.splice(i,1);
//         }
//         else{
//             nums.splice()
//         }
//     }
// }

// function minEleRemoved(arr) {
//     const n = arr.length;

//     const increasingLengths = new Array(n).fill(1);
//     const decreasingLengths = new Array(n).fill(1);
  
//     for (let i = 1; i < n; i++) {
//       for (let j = 0; j < i; j++) {
//         if (arr[i] > arr[j]) {
//           increasingLengths[i] = Math.max(increasingLengths[i], increasingLengths[j] + 1);
//         }
//       }
//     }
  
//     for (let i = n - 2; i >= 0; i--) {
//       for (let j = n - 1; j > i; j--) {
//         if (arr[i] > arr[j]) {
//           decreasingLengths[i] = Math.max(decreasingLengths[i], decreasingLengths[j] + 1);
//         }
//       }
//     }
  
//     let maxSum = 0;
//     for (let i = 0; i < n; i++) {
//         console.log(maxSum);
//       maxSum = Math.max(maxSum, increasingLengths[i]+ decreasingLengths[i]);
//     }
//     return n - maxSum + 1;
//   }
  
//   const inputArray = [4,-1,5,7,3,1,2,1,11];
//   const output = minEleRemoved(inputArray);
//   console.log(output);
  

// [2,1,1,5,6,2,3,1]



let obj1 = {a :1, b:2,c:3}
let obj2 = {b:4, d:3, c:5};

for(let key in obj2){
    if(obj1.hasOwnProperty(key)){
        obj1[key] += obj2[key];
    }else{
        obj1[key] = obj2[key];
    }
}
console.log(obj1);