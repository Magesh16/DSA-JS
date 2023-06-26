/*Arrow function vs Normal Function */

// class user{
//     constructor(name){
//         this.name = name;
//     }
//     printArrow(){
//         setTimeout(()=> console.log(this.name),1000);
//     }
//     printFunc(){
//             console.log(this.name);
//     }
// }
// let newUSer = new user("magi");
// newUSer.printArrow();
// let func = newUSer.printFunc.bind(user);
// func();

/* Wrapping a normal function to use this */
// let user = {
//     firstName: "John",
//     sayHi() {
//       console.log(`Hello, ${this.firstName}!`);
//     }
//   };
  
//   setTimeout(function() {
//     user.sayHi(); 
//   }, 1000);

/*Binding of normal function */

// let user ={
//     firstName : "Magi"
// }
// function sayHi(){
//     console.log(this.firstName);
// }
// let func = sayHi.bind(user);
// func();

/*Aruguments in arrow function doesnt work*/

// let user1 = ()=>{
//     console.log('arg',arguments);
// }
// let user2 = function(){
//     console.log('arg',arguments);
// }
// user2(123)


