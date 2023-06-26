//1st Method
// let arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6];
// let map = new Map();
//     arr2.forEach((item, ind) =>{
//         map.set(item,ind);
//     });
//      arr1 =  arr1.sort((val1,val2) =>{
//         val1 = map.has(val1)? map.get(val1) : arr2.length+val1;
//         val2 = map.has(val2)? map.get(val2): arr2.length+val2;
//         return val1-val2;
//     })
//     console.log(arr1);

    //2nd method

    let arr1 =[2,3,1,3,2,4,6,7,9,2,19];
    let arr2 = [2,1,4,3,9,6];
    let obj ={};
    for(let i=0;i<arr2.length;i++){
        obj[arr2[i]] = i;
    }
    console.log(obj)
    for(const i of arr1) if(!(i in obj)) obj[i]=1000+i;
    console.log(obj)
    console.log(arr1)
    arr1.sort((a,b)=> obj[a]-obj[b]);
    console.log(arr1)