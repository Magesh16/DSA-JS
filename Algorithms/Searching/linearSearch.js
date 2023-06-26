import readline  from "readline-sync";

let linearSearch =(arr,val)=>{
    for(let i=0;i<arr.length;i++){
        if(arr[i] ==val){
            console.log(i);
        }
    }
}

let arr = [2,4,5,6,7];
let val = 5;
linearSearch(arr,val);
