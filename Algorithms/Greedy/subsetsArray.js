// const arr = [1, 2, 3];
// const subsets = (arr) => {
  
//   if (arr.length === 0) {
//     return [[]];
//   }
//   const firstElement = arr[0];
//   const subsetsWithoutFirstElement = subsets(arr.slice(1));
//   console.log(subsetsWithoutFirstElement);
//   const withFirstElement = subsetsWithoutFirstElement.map((subset) => {
//     return [firstElement, ...subset];
//   });

//   return [...subsetsWithoutFirstElement, ...withFirstElement];
// };
// // subsets(arr);
// console.log(subsets(arr));

//Recursion for subset Arrays

let arr =[1,2,3];
let res =[];
let subset =[];
let dfs = (ind)=>{
  if(ind == arr.length){
    res.push(subset.slice(0));
    return;
  }
  subset.push(arr[ind]);
  dfs(ind+1);
  subset.pop();
  dfs(ind+1);
  return res;
}
dfs(0);
console.log(res);