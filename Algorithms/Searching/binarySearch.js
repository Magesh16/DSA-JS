import readline from "readline-sync";

let binarySearch =(arr,val)=>{
    let start = 0;
    let end = arr.length-1;
    
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid] ==val){
            return true;
        }
        else if(arr[mid]>val){
            end = mid-1;
        }else{
            start =mid+1;
        }
    }
    return false;
}

let num = readline.question("Enter the num of elements: ");
let val = readline.question("Value to be found: ");
let arr=[];
    
    for(let i=0;i<num;i++){
    arr[i] = readline.question("Enter the elements: ");
    }

console.log(binarySearch(arr,val));