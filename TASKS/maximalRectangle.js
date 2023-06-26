// let arr = [
//     ['1','0','1','0','0'],
//     ['1','0','1','1','1'],
//     ['1','1','1','1','1'],
//     ['1','0','0','1','0']
// ];

// let n =arr.length;
// let m= arr[0].length;
// let i=0,j=0;
// let count=0;
// let prev =201;
// let area =0;

// let maximalRect = (i,j,rowCount,colCount)=>{
//     let temp =i;
//     while(i<n && arr[i][j] == '1' ){
//         rowCount+=1;
//         i++;
//     }
//     rowCount = Math.min(rowCount, prev);
//     prev = rowCount;
//     if(area<rowCount*colCount){
//         area = rowCount*colCount;
//     }
//     if(j<m-1){
//         maximalRect(temp,j+1,0,colCount+1);
//     }
// }
// for(let i=0;i<n;i++){
//     for(let j=0;j<n;j++){
//         if(arr[i][j] == '1'){
//             maximalRect(i,j,0,1);
//             prev =201;
//         }
//     }
// }
// console.log(area);

let arr = [
    ['1','0','1','0','0'],
    ['1','0','1','1','1'],
    ['1','1','1','1','1'],
    ['1','0','0','1','0']
    
];

let n =arr.length;
let m= arr[0].length;
let ht = new Array(m).fill(0);

let max=0;
for(let i=0;i<n;i++){
    for(let j=0;j<m;j++){
        if(arr[i][j] == '1'){
            ht[j]+=1;
        }else{
            ht[j]=0;
        }
    }
    console.log(ht);
    max = Math.max(max, findArea(ht));
}

function findArea(ht){
    let stack=[];
    let maxArea=0;
    for(let i=0;i<=ht.length;i++){
        let curr = i==ht.length ? 0 : ht[i];
        while(stack.length!=0 && curr <ht[stack.at(-1)]){
            let top = stack.pop();
            let width =stack.length==0 ? i : i - (stack.at(-1))-1; 
            let area = ht[top]*width;
            maxArea = Math.max(area,maxArea);
        }
        stack.push(i);
    }
    return maxArea;
}

console.log(max);