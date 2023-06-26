let s="({[]})";
var isValid = function(s) {
    let tempArr =[];
    let Map = {
        '(':')',
        '[':']',
        '{':'}'
    };

    for(let i=0;i<s.length;i++){
        if(s.charAt(i) =='(' || s.charAt(i)=='[' || s.charAt(i)=='{'){
            tempArr.push(s[i]);
        }else if(Map[tempArr.pop()]!=s[i]){
            return false;
        }
    }
    return (tempArr.length>0)?false:true;
};

//output : true

//Input : "([)]"
//output : false