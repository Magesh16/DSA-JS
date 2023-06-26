let s ="PAYPALISHIRING";
let row =3;
let arr=new Array(3);
for(let i=0;i<arr.length;i++){
    arr[i] = [];
}
let h=0;
for(let i=0;i<row;i++){
    for(let j=0;j<row;j++){
        arr[j][i] =  s[h++];
    }
}
for(let i=0;i<row;i++){
    for(let j=0;j<row;j++){
        let k=0;
        console.log(arr[j][i]);
    }
    console.log("\n");
}
// for(let i=0;i<row;i++){
//     for(let j=0;j<s.length;j++){
//         console.log(arr[i][j])
//     }
//     console.log("\n");
// }
