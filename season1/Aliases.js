"use strict";
console.log("Aliases");
const w = 25;
const w2 = "omid";
const w3 = "Saeed";
console.log(w, w2, w3);
const w4 = "Mika";
const w5 = "Amin";
console.log(w4, w5);
let f2 = (num1, num2) => {
    return num1 + num2;
};
console.log(f2(4, 5));
/////////////////////////////////////////////////
let Add = (a, b) => {
    return a + b;
};
let Print = (n) => {
    console.log(n);
};
Print(Add(50, 60));
console.log(Add(10, 20));
let AddCallBack = (a, b, cb) => {
    const result = a + b;
    cb(result);
};
AddCallBack(100, 200, (res) => {
    console.log(res);
});
