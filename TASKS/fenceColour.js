let n=3;
let k=2;
let total=k;
function fenceColour(n,k){
if(n==0){
    return 0;
}
else if(n==1){
    return k;
}
else{
    let colour =0, temp=k;
    for (let i = 2; i <n; i++) {
        colour = temp;
        temp = total * (k - 1);
        total = (colour + temp);
    }

}
return total;
}
console.log(fenceColour(n,k));