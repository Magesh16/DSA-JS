let arr =[
    // [0, 10, 15, 20],
    // [10, 0, 35, 25],
    // [15, 35, 0, 30],
    // [20, 25, 30, 0]
    //   [0,3,99,4,99,99,2,99,99],  
    //          [3,0,3,99,99,99,99,99,99],
    //          [9,3,0,1,7,99,99,99,99],
    //          [4,99,1,0,99,4,1,7,99],
    //          [99,99,7,4,0,9,99,99,99],
    //          [99,99,99,1,9,0,99,99,2],
    //          [2,99,99,7,99,99,0,5,99],
    //          [99,99,99,7,99,99,5,0,3],
    //          [99,99,99,99,99,2,99,3,0] 
    [0,10,15,20],
    [5,0,9,10],
    [6,13,0,12],
    [8,8,9,0]
];
let n =arr.length;
let visited =[0];
let path_values = [] ;
function min(ar){
    let arr = [...ar]
    visited.forEach(ele=> arr[ele]= 0)
    let index = arr.indexOf(0) 
        while(index !=-1){
        arr.splice(index,1) 
        index = arr.indexOf(0) ;
        }
    let temp = Math.min(...arr)
    return temp  
}
let i = 0

while(visited.length < n) {
    let min_value = min(arr[i])
    let x  = arr[i].indexOf(min_value)
    visited.push(x)
    path_values.push(min_value)
    i = x
}
path_values.push(arr[i][0])
console.log(path_values.reduce((acc,curr)=>acc+curr,0))