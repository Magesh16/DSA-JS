import XMLHttpRequest from 'xhr2';
//Functions and Arrow Function
// let user ={
//     color: 'red',

//     age: function(){
//         const val = function(){
//             console.log(this);
//         }.bind(this);
//         val();
//     },

//     height: function(){
//         const inner = ()=>{
//             console.log(this);
//         }
//         inner();
//     }
// }

// user.age();
// user.height();


//Make Dynamic class
// function makeDynamic(text){
//     return class {
//         sayHi(){
//             console.log(text);
//         }
//     }
// }
// let user = makeDynamic("Hello Doodies");
// new user().sayHi();

//Currying concept
    // function sum(a){
    //     return function(b){
    //         return function(c){
    //             return a+b+c;
    //         }
    //     }
    // }
    // console.log(sum(3)(4)(5));

    //Function Callback

    // function hello(name){
    //     console.log("hello "+name);
    // }
    // function main(callback){
    //     let name = "magi";
    //     callback(name);
    // }
    // main(hello)

// XMLRequest

// function getTodo(resource) {
//     return new Promise((resolve, reject) => {
//         let request = new XMLHttpRequest();

//         request.open('GET', resource);
//         request.send();

//         request.onreadystatechange = function () {
//             if(this.status == 200 && this.readyState == 4) {
//                 resolve(request.responseText);
//             } else if(this.readyState == 4) {
//                 reject("Error occurred");
//             }
//         };
//     });
// }

// getTodo("https://jsonplaceholder.typicode.com/posts")
//     .then(data => console.log("Success:\n", data))
//     .catch(err => console.log(err));

//Fetch using promises

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

