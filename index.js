// const axios = require('axios');
// async function doGetRequest() {
//   let res = await axios.get("https://www.boredapi.com/api/activity");
//   let data = res.data;
//   console.log(data);
// }

// doGetRequest();

// let palin = "pap"
// let rev = n => n.toString().split('').reverse().join('');
// (palin === rev(palin))?console.log("yes"):console.log("Not")



// let word = "dog";

// let substrings = (word)=>{
//     arr= [];
//     for(let i=0,j=1;i<word.length;i++,j++){
//         arr[i] = word.substring(i,j);
        
//     }
//     let combi = [];
//     let slent = Math.pow(2, arr.length);
//     for(let i=0;i<slent;i++){
//         let temp="";
//         for(let j=0;j<arr.length;j++){
//             if ((i & Math.pow(2,j))){ 
//                 console.log(i+" "+j)
//             temp+=arr[j];
//             }
//     }
//     combi.push(temp);
//     }
//     console.log(combi.join('\n'));
    
// }

// substrings(word);
// console.log(1&3)

// let alpha = str => str.split('').sort().join('');
// console.log(alpha("webmaster"))

// let prompt = require("prompt-sync");
// let s = prompt("Hell",12);
// console.log(typeof(s))


// let arr=[10,20,3,4,5];
// arr.forEach((i,ind,arr)=>{
//     console.log(i);
// })


// let obj ={
//     0:"Hello",
//     1:"World",
//     [Symbol.isConcatSpreadable]: true,
//     length:2
// }



// let compare = (a,b)=> {
//     console.log(arr);
//     return a-b;
// }
// console.log(arr.sort(compare));


// let order = arr.toString().split(',').sort().join(' ');
// console.log(order);

// let arr1=[1,2,3,4,5];
// let arr2 =[1,2,3,5,4];
// let arrayEquals = (arr1,arr2)=>{
//     return (arr1.length === arr2.length && arr1.every((value,index)=> value === arr2[index]));
// }
// console.log(arrayEquals(arr1,arr2))

// let json = '{"name":"magi", "wife":"buji", "tag":"world"}'

// try{
//     let user = JSON.parse(json);
//     console.log(user.name);
// }catch(e){
//     console.log(e);
// }

// let user={
//     "firstName": "Magesh",
//     "lastName" : "Sathish",
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// };

// console.log(user.fullName)


// let user={
//     "firstName": "Magesh",
//     "lastName" : "Sathish",
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     },
//     set fullName(value){
//         [this.firstName, this.lastName] = value.split(' ');
//     }
// };
// user.fullName = 'Ram Jaanu';
// console.log(user.firstName);

// let user ={
//     get name(){
//         return this._name;
//     },
//     set name(value){
//         if(value.length<5){
//             console.log("Fun");
//             return;
//         }
//         this._name = value;
//     }

// };
// user.name = "Magesh";
// console.log(user.name)
// user.name ="";

// function User(name,age){
//     this.name = name;
//     this.age = age;
// }
// let u = new User("Magesh",20);
// console.log(u.age)

// let sentences = ["Hey hii how are you", "I am so cool","You the fucking bitch"];
// let val = sentences.map(ele => ele.split(' ').length);
// console.log(Math.max(...val))

// let obj = {"name":["magi","prabi","nivi"]};
// Object.assign(obj, {"Jovi":"Prabin"})
// console.log(obj);
// obj.name.map(ele => console.log(ele));

// let arr=[1,2,5];
// let max = Math.max(...arr);
// max =max*2;
// let sum=0
// let check = arr.reduce((sum, i)=>sum+i, 0);
// if((check-max ==0) || ((check-max)%2==0) ||((check-max)%2!=-0) ){
//     console.log("true");
// }else{
//     console.log("false")
// }

// async function f(){
//     return Promise.resolve(1);
// }
// f().then((console.log()))


// let promise = new Promise((resolve,reject)=>{
//     return setTimeout(()=> resolve("Heyy hii"),100)
// });
// promise.then((val)=> console.log(val))
//         .catch((err)=> console.log(err));
// const getData = async()=>{
//     try{
//         const data = await promise;
//         console.log(data);
//     }catch(e){
//         console.log(e);
//     }
// }

// getData()

// let arr ={
//     "who": ['bird','animal','giraffe'],
//     "why": ['hot','cold','bliss']
// };

// for(let item in arr){
//     console.log(`${item}`);
//     for(let val of arr[item]) console.log(`${val}`);
// }

// let promise1 = Promise.resolve();
// let promise2 = Promise.resolve();

// promise1
// .then(() => console.log(1))
// .then(() => console.log(2));
 
// promise2
// .then(() => console.log(3))
// .then(() => console.log(4))

// class User{
//     constructor(name){
//         this.name = name;
//     }

//     hello(){
//         console.log(this.name);
//     }
// }
// let user = new User('Magi')
// user.hello();

// function *generateSequence(){
//     yield 1;
//     yield 2;
//     return 3;
// }


// let gen = generateSequence();
// let one = gen.next();
// let two = gen.next();
// console.log(one);
// console.log(JSON.stringify(one));

// function *generator(){
//     let id=0;
//     while(true){
//         yield id;
//         id++;
//     }
// }
// let gen = generator();
// for(let val of generator()) console.log(val);
// while(setTimeout(()=> gen.next()),1000){
//     console.log(gen.next());
// }

//Relative Sort
// let arr1 =[2,3,1,3,2,4,6,7,9,2,19];
// let arr2 = [2,1,4,3,9,6];
// let obj ={};
// for(let i=0;i<arr2.length;i++){
//     obj[arr2[i]] = i;
// }
// console.log(obj[2])
// for(const i of arr1) if(!(i in obj)) obj[i]=1000+i;
// arr1.sort((a,b)=> obj[a]-obj[b]);
// console.log(arr1);

//Closure
// function outer(Ovar){
//    return function inner(Ivar){
//         console.log("Outer"+Ovar);
//         console.log("Inner"+Ivar);
//     }
// }
// let newFunc = outer("Hello");
// newFunc("World");

// async function user1(){
//     return "Hello"
// }
// function user2(){
// setTimeout(()=>console.log("Here"),1000);
// }

// console.log(user1());
// user2();

// async function user(){
//     return new Promise(resolve =>{
//         setTimeout(()=> resolve('resolved'),2000);
//     })
// }

// async function user2(){
//     console.log("calling");
//     const res = await user();
//     console.log(res);
// }

// user();


// const axios = require('axios');

//         axios
//             .get("https://www.boredapi.com/api/activity")
//             .then(()=>{
//                     console.log(`${response.data.activity}`);
//                 })
//             .catch((e)=>{
//                     console.log(e);
//                 })
// console.log("Hellooo")

// let animal = {
//     eats:"grass",
//     walk(){
//         console.log('animal love');
//     },
    
// }
// let bird = {
//     fly:"high",

// }
// let insects ={
//     size:'small',
//     __proto__ : bird
    
// }
// for(let item in insects){
//     let isOwn = insects.hasOwnProperty(item);
//     isOwn ? console.log(item) : console.log(item);
// }



// function sayHi(){
//     let a="Hello";
//     console.log(a);
// }
// console.log(a);
// sayHi();


// let str = "Hello";
// let clone = Object.assign([],str);
// console.log(clone)


// let user ={
//     name:"Magi",
//     age:"20",
//     sayHi(){
//         console.log(this.name);
//     }
// }   
// let admin =Object.assign({},user);
// user=null;
// admin.sayHi();

// let promise = new Promise((resolve,reject)=>{
//     setTimeout(()=> resolve(new Error("whops")),1000)
// });
// promise
//        .then(res => console.log("hii"+res))
//        .catch(err => console.log(err))
//        .finally(()=> console.log("Mooditu iru"))

// function promise(){
//     return new Promise((resolve => setTimeout(resolve,2000)));
// }
// promise().then(res=> console.log("run after 2 sec"+res));


// async function f(){
//     let promise = new Promise((resolve,reject)=>{
//         setTimeout(()=> resolve("Donee "),3000);
//     });
//     let res = await promise;
//     console.log(res);
    
// }

// f();

// let str ="())";
// for(let i=0;i<str.length;i++){
//     console.log(str.charAt(i))
// }
// let arr1=[3];
// let arr2 =[-2,-1];
// console.log((arr1.concat(arr2)).sort((a,b)=>a-b))

// let n=4;
// let str='';
// let sum=1;
// let rows=n;
// let sumBelow=1;
// for(let i=0;i<n;i++){
//     str='';
//     for(let j=0;j<i;j++){
//         str+='    ';
//     }
//     for(let j=0;j<n-i;j++){
//         str+=sum+' * ';
//         sum++;
//     }
    
//     let k =(rows)*(rows);
//     for(let j=0;j<n-i;j++){
//         str+=k+sumBelow+' * ';
//         sumBelow++;
//     }
//     rows--;
//     console.log(str);
// }

// let n=4;
// let str='';
// let str1='';
// let sum=1;
// let rows=n;
// let sumBelow=1;
// for(let i=0;i<n;i++){
//     str='';
//     str1='';
//     for(let j=0;j<i;j++){
//         str+='    ';
//     }
//     let k =(rows)*(rows);  
//     for(let j=0;j<n-i;j++){
//         str+=sum+' * ';
//         str1+=k+sum+' * ';
//         sum++;
//         if(j==rows-1) str+=str1+"\n";
        
//     }  
//     rows--;
//     console.log(str);
// }


// let arr=[4,5,6,7];
// let arr1=[]
// let k=3;
// let sum=0;
// let num1=0;
// let arr2=[];
// if(arr.length%2==0){
// for(let i=0,j=0;i<arr.length;i+=2,j++){
//     arr1[j] = (arr[i]+arr[i+1]);
//     arr2[j] =k*arr1[j];
    
// }
// let arrSum = arr1.reduce((acc,val)=>acc+val, 0);
// arrSum=k*arrSum;
// console.log(arrSum+ arr2.reduce((acc,val)=>acc+val, 0));
// }else{
//     for(let i=0,j=0;i<arr.length-1;i+=2,j++){
//         arr1[j] = (arr[i]+arr[i+1]);
//         arr2[j] =k*arr1[j];
//     }
//     let arrSum = arr1.reduce((acc,val)=>acc+val, 0);
//     let addLastVal = k*(arrSum+arr[arr.length-1]);
//     console.log(addLastVal+arr2.reduce((acc,val)=> acc+val, 0));
// }

// let arr=[1,2,3,4,5];
// console.log(arr.slice(1));


// let charArr =['1','a','b'];
// console.log(charArr.toString().split(",").join(""));

// let str ="ConSnanT";
// let res="";
// for(let i=0;i<str.length;i++){
//     if(!(str[i]=='a' || str[i] =='e' || str[i] =='i' || str[i] =='o' || str[i] =='u')){
//         res+="."+str[i].toLocaleLowerCase();
//     }
// }
// console.log(res);

// let obj = {a:400, b:100, c:400};
// const getMax = object => {
//     return Object.keys(object).filter(x => {
//          return object[x] == Math.max.apply(0, Object.values(object));
//    });
// };
// console.log(getMax(obj));
// let x=10;
// lol();
// function lol(){
//     console.log(typeof func);
//     function func(){
//         console.log("Hiii");
//     }
    
// }
// var x= 10;
// (function(){

//     console.log(x);
// }())

// let obj ={
//     prop1:'23'
// }
// let obj2 = Object.seal(obj);
// obj2.prop1 ='30'
// console.log(obj);


// let a ={};
// let b =a;
// console.log(a==b && a===b);



// let arr =[10,20,[30,40]];
// let arr2 =arr.slice();
// arr2[2][1]=450;
// console.log(arr);

// let obj ={
//     name:"magi",
//     age: 21,
//     height:{
//         identifier:6
//     }
// }
// let obj2 =deepFreeze(obj);
// obj2.height.identifier =10
// console.log(obj);

// let obj2 = JSON.parse(JSON.stringify(obj))
// obj2.age =30;
// obj2.height.identifier =0
// console.log(obj);

// let myarray = ['d','s', 'a'];
// let chr_arr = Array.from(new Set(myarray));
// console.log(chr_arr);
// let arr =[1,2,3,4,5];

// let b = arr.reduce((sum,items)=>sum+items,0);
// console.log(b);

// function isEqual(a,b){
//     return a.every((val,ind) => val == b[ind]);
// }

// let arr=[[1,2],[1,2]];
// console.log(isEqual(arr[0],arr[1]));

// function sum(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }
// console.log(sum(3)(4)(5));

// let sendReq = greet => name =>message =>{
//     `${greet}, ${name}, ${message}`
// }

// console.log(sendReq("Hello")("magi")("Welcome to codingmart!!"));

// let permutations =(str)=>{
//     if(str.length<2) return str;
//     let arr =[];
//     for(let i=0;i<str.length;i++){
//         let ch = str[i];
//         let remainChars  = str.slice(0,i)+str.slice(i+1,str.length);
//         for(let item of permutations(remainChars)){
//             arr.push(ch+item);
//         }
//     }
//     return arr;
// }
// console.log(permutations("abc"));

// let list = {
//     5 : [3,4,7]
// }
// function remove (v1,v2){
//     return list[v1].filter(v =>v!=v2);
// }
// console.log(remove(5,4));

// function makeCount(){
//     let count=0;

//     return function(){
//         return count++;
//     }
// }
// let counter = makeCount();
// console.log(counter);

// function init(){
//     var name = "magi";
//     function say(){
//         console.log(name);
//     }
//     return say;
// }
// let val = init();
// val()

// function init(size){
//     return function(){
//     console.log(size);
//    }
// }
// let user = init(12);
// user()
// user()
// user2()

// let obj = {
//     name :"shyam"
// }
// Object.defineProperty(obj, 'name',{
//     writable:false
// })
// obj.name ="magi";

// let descriptor = Object.getOwnPropertyDescriptor(obj,'name');
// console.log(descriptor);

// Closure
// function outer(x){
//     let inner = x;
//     return function innerFunc(){
//         return inner;
//     }
// }
// let closure = outer(5);
// console.log(closure());

// function outerFun(){
//     let outer = "Hello";
//     function innerFun(){
//         let inner = "World";
//         console.log(outer);
//         console.log(inner);
//     }
//     return innerFun;  
// }
// let closure = outerFun();
// closure();

//Closure
// function outer(Ovar){
//    return function inner(Ivar){
//         console.log("Outer"+Ovar);
//         console.log("Inner"+Ivar);
//     }
// }
// let newFunc = outer("Hello");
// newFunc("World");

// class hello{
//     constructor(name,age){
//         this.name = name;
//         this.age =age ?? 18;
//     }
//     getHello(){
//         return this.name+" "+this.age;
//     }
// }
// let user =new hello("magi",21);
// console.log(user.getHello());

// function outer(x){
//     return function inner(y){
//         return x+y;
//     }
// }

// let user = outer(5)(10);
// console.log(user);
// console.log(user(10));

// class animal{
//     constructor(height,width){
//         this.height = height;
//         this.width =width;
//     }
//     *getSize(){
//         yield this.height,
//         yield this.width
//     }
// }
// let user = new animal('193','40');
// console.log([...user.getSize()]);

// function hello(){
//     let user ="magi"
//     return function world(){
//         console.log(user);
//     }
// }
// let u1 = hello()();

// function hello(name){
//     console.log(name);
// }
// function main(callback){
//     let name ="ahsyam";
//     callback(name);
// }
// main(hello)

// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers:{
//     'Content-Type':'application/json'
//     },
//     body: JSON.stringify({
//         review:"hello"
//     })

// })
// .then(res=> res.json())
// .then(data => console.log(data))

// async function fetching (){
//     let res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     let data = await res.json();
//     console.log(data);
// }
// fetching()

// let user ={
//     name:"magi",
//     regNo:"3123",
//     other: function(sub1, sub2){
//         return sub1+sub2;
//     },
//     getDetails: function(){
//         return this.name+" "+this.regNo;
//     }
// };
// // let user2 = user.other;
// console.log(user.other(10,20));
// console.log(user.getDetails());

// let promise = new Promise((resolve,reject)=>{
//     setTimeout(()=> resolve("Done"),2000);
// }).then(res => console.log(res))

// let arr =[1,2,3,4];
// let newArr = arr.map((i)=> i*2);
// console.log(newArr);


// import readline from "readline-sync";

// function sumFun(arr){
//     return arr.reduce((a,b)=>a+b);
// }
// function print(callback){
//     let n= readline.question("Number of elements in array");
//     let arr=[]
//     for(let i=0;i<n;i++){
//         arr[i]=+readline.question("Enter element");
//     }
//     console.log(callback(arr));
// }
// print(sumFun);

// function print(){
//     for(var i=0;i<5;i++){
//         setTimeout(()=>console.log(i),i*1000);
//     }
// }
// print()

// function x(){
//     let a=5;
//      function y(){
//         console.log(a);
//     }
//     a=100;
//     return y;
// }
// let z = x();
// z();





// function print(callback){
//     let arr =[1,2,3,4,5];
//     console.log(callback(arr));
// }
// function sum(arr){
//     return arr.reduce((a,b)=>a+b);
// }
// print(sum);

var twoSum = function(nums, target) {
    let obj ={};
    for(let i=0;i<nums.length;i++){
        if(!Object.hasOwn(obj, target-nums[i])){
            if(Object.hasOwn(obj, nums[i])){
                console.log([obj[nums[i]],i])
                return [obj[nums[i]],i]
            }else{
                obj[target-nums[i]] =i ;
                console.log(obj);
            } 
        }
        else{
            console.log([obj[target-nums[i]],i])
            return [obj[target-nums[i]],i]
        }
    }
};

let nums=[1,1,1,1,1,4,1,1,1,1,1,7,1,1,1,1,1];
let target = 11;
twoSum(nums,target)