var decodeMessage = function(key, message) {
    let alphaKey = new Set();
    let alphaMap = new Map();
    let k = key.replace(/ /g, '');
    for(let i=0;i<k.length;i++){
        alphaKey.add(k.charAt(i))
    }
    let removedDup = Array.from(alphaKey).join('');
    let keyArr =[];
    let alphabetArr =[];
    let alp = "abcdefghijklmnopqrstuvwxyz";
    for(let i=0;i<removedDup.length;i++){
        keyArr.push(removedDup.charAt(i));
        alphabetArr.push(alp.charAt(i));
        alphaMap.set(keyArr[i],alphabetArr[i]);
    }
    let output="";
    for(let i=0;i<message.length;i++){
        if(message[i]!=" "){
            output+=alphaMap.get(message[i]);
        }else{
            output+=" ";
        }
    }
    return output;
    
};
let key = "the quick brown fox jumps over the lazy dog", message = "vkbs bs t suepuv";
console.log(decodeMessage(key,message));