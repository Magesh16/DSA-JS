import readline from 'readline-sync';
let n = readline.question("Enter the length of matrix: ");
let arr=[];
for(let i=0;i<n;i++){
    arr[i] = new Array(n);
}
for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        arr[i][j] = readline.question(""); 
    }
}
// let arr=[[2, 1, 0, 0],
//          [3, 0, 0, 1],
//          [0, 1, 0, 1],
//          [0, 0, 0, 1]];
// let n =arr.length;
let res =[];

let isSafe =(arr,i,j)=>{
    if(i>=0 && j>=0 && i<n && j<n && arr[i][j]!=0) return true;
    return false;
}
let solveMaze =(arr)=>{
    for(let i=0;i<n;i++){
        res[i] = new Array(n);
        for(let j=0;j<n;j++){
            res[i][j]=0;
        }
    }
    
    if(solveMazeUtil(arr,0,0,res) == false){
        console.log("Path not found");
    }
    let str="";
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            str+=res[i][j]+" "
        }
        console.log(str);
        str="";
    }
}
let solveMazeUtil =(arr,x,y,res)=>{
    if (x==n-1 && y==n-1){
        res[x][y] =1;
        return true;
    }
    if(isSafe(arr,x,y) == true){
        // if(res[x][y]==1) return false;
        res[x][y]=1;
        for(let i=1;i<=arr[x][y]&& i<n;i++){
        if(solveMazeUtil(arr,x+i,y,res)){
            return true;
        }
        if(solveMazeUtil(arr,x,y+i,res)){
            return true;
        }
    }
        res[x][y]=0;
        return false;
}
    return false;
}
solveMaze(arr);
