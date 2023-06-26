let address = "1.1.1.1"
let defangIPaddr = function(address) {
    let a = address.split(".").join("[.]")
    return a;
};
console.log(defangIPaddr(address))

//Output : 1[.]1[.]1[.]1