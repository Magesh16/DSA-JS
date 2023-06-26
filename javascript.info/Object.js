let salary ={
    "magi":1000,
    "akash":600,
    "vinoth": 800,
};

for(let i of Object.keys(salary)){
    console.log(i);
}
// let sumSalary = Object.values(salary).reduce((sum,item)=> sum+item, 0);
// console.log(sumSalary);

// console.log(Object.entries(salary).reduce((acc,item)=> acc+ item[1],0));

// for(let [key,value] of Object.entries(salary)){
//     console.log(`${key} : ${value}`);
// }

//Map Concept

// let user = new Map();
// user.set("Name", "Magi")
// user.set("Age", 20)
// user.set("Dept", "Software")

// for(let item of user.keys()){
//     console.log(item);
// }

// let company = {
//     sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
//     development: {
//       sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
//       internals: [{name: 'Jack', salary: 1300}]
//     }
//   };
  
//   function sumSalaries(department) {
//     console.log(Array.isArray(department));
//     if (Array.isArray(department)) { 
        
//       return department.reduce((prev, current) => prev + current.salary, 0);
//     } else { 
//       let sum = 0;
//       for (let subdep of Object.values(department)) {
//         sum += sumSalaries(subdep);
//       }
//       return sum;
//     }
//   }
  
//   console.log(sumSalaries(company));




//Object.keys()
//Object.values()
//count(object)
//Object.entries() - make object as arrays
//Object.fromEntries() - make arrays as objects
//Object.values(obj) && Object.values(obj) - To access key value pair in objects
//{maoName}.keys() && {mapName}.values()
