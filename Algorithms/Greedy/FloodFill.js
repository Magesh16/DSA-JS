// let arr=[
//     [0,0,1,0,0],
//     [0,0,1,1,0],
//     [0,1,1,0,0],
//     [0,1,0,1,0],
//     [1,1,0,0,0],
// ];
// let i=1,j=2;
// let newVal=2;
// let currVal=1;

// let isValid = (arr,i,j)=>{
//     if(i<arr.length && j<arr[0].length && i>=0 && j>=0 ){
//         return true;
//     }
//     return false;
// }

// let fillAdjacent =(i,j, newVal,currVal)=>{
//     let queue=[]
//     let directions = [[0,-1],[-1,0], [0,1],[1,0]];
//     queue.push([i,j]);
//     while(queue.length>0){
//         let m = queue[0][0];
//         let n = queue[0][1];
//         arr[m][n] = newVal;
//         queue.shift();
//         for(let k=0;k<directions.length;k++){
//             let adjX = m+directions[k][0];
//             let adjY = n+directions[k][1];   
//             if(isValid(arr,adjX,adjY) && arr[adjX][adjY] == currVal){
//                 queue.push([adjX,adjY]);
//             }
//         }
//     }
//     return arr;
// }
// console.log(fillAdjacent(i,j,newVal,currVal));

let arr=[
    [0,0,1,0,0],
    [0,0,1,1,0],
    [0,1,1,0,0],
    [0,1,0,1,0],
    [1,1,0,0,0],
];

let fillAdjacent =(arr,newVal, prevVal, i, j)=>{
    if(i<0 || j<0 || i>=arr.length || j>=arr.length) return;
    if(arr[i][j] != prevVal) return;
    arr[i][j] = newVal;

    fillAdjacent(arr, newVal,prevVal,i+1,j);
    fillAdjacent(arr, newVal,prevVal,i-1,j);
    fillAdjacent(arr, newVal,prevVal,i,j+1);
    fillAdjacent(arr, newVal,prevVal,i,j-1);

}

let flodFill =(newVal,i,j)=>{
    let prevVal = 1;
    if(prevVal == newVal) return;
    fillAdjacent(arr,newVal,prevVal,i,j);
    return arr;
}
let newVal = 3;
let i=2,j=2;
console.log(flodFill(newVal,i,j));