// let nums =[1,2,3];
// let permute = (nums)=>{
// let res=[];
// if(nums.length==0) return [];
// if(nums.length==1) return [nums]

// for(let i=0;i<nums.length;i++){
//     const currNum = nums[i];
//     const remainNums = nums.slice(0,i).concat(nums.slice(i+1));
//     const remainNumPermute = permute(remainNums);
// for(let j=0;j<remainNumPermute.length;j++){
//     const permutedArr = [currNum].concat(remainNumPermute[j]);
//     res.push(permutedArr)
// }

// }
// return res;

// }
// console.log(permute(nums));

// function hello(message){
//     return this.name + " is "+ message;
// }
// let world = {name:"Magi"};

// var car = {
//     colour : "blue",
//     getDetails : function(model, speed){
//         return this.colour
//     },
//     getToke : ()=>{
//         return this.colour;
//     }
// }
// console.log(car.getDetails());
// console.log(car.getToke());

// car.getColour()
// var carName = {name:"audi"};
// let p = car.getDetails.bind(carName, 'S2','350');
// console.log(p());

// function randomFunc(){
//     var obj1 = {name:"Vivian", age:45};
  
//     return function(){
//       console.log(obj1.name + " is "+ "awesome"); // Has access to obj1 even when the randomFunc function is executed
  
//     }
//   }

//   randomFunc()();
// function addOn(sum){
//     console.log(sum+5);
// }
// function subOn(sum){
//     console.log(sum-5);
// }
// function operationSum (num1,num2, callback){
//     let sum = num1+num2;
//     callback(sum);
// }

// operationSum(9,4,addOn)
// operationSum(9,4,subOn)

// function memoizedAddTo256(){
//     var cache = {};
  
//     return function(num){
//       if(num in cache){
//         console.log("cached value");
//         console.log(cache[num]);
//       }
//       else{
//         cache[num] = num + 256;
//         console.log(cache[num]);
//       }
//     }
//   }
//   var memoizedFunc = memoizedAddTo256();
  
//   memoizedFunc(20);
//   memoizedFunc(20);

// function fibo(n){
//     if(n ==0 || n==1){
//         return n
//     }
//     else{
//         return fibo(n-1)+fibo(n-2);
//     }
// }
// let n =5;
// for(let i=0;i<n;i++){
//     console.log(fibo(i));
// }

// let obj = {name:"magi"};
// let set = new WeakSet([{a:1}]);
// console.log(set.has(a));

// let promise = new Promise((resolve,reject)=>{
//     let x=0;
//     if(x==0){
//         resolve("OK")
//     }else{
//         reject("Not ok");
//     }
// });
// promise.then((data)=> console.log(data))
//         .catch((err)=> console.log(err))

// let arr =[1,1,2,3,3,3,4,4];
// let map =new Map();
// for(let i=0;i<arr.length;i++){
    
//     if(map.has(arr[i])){
//         map.set(arr[i],map.get(arr[i])+1);
//     }else{
//         map.set(arr[i],1);
//     }
// }
// console.log([...map.entries()]);





