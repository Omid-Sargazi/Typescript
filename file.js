"use strict";
// // function addNumber(num1:number, num2:number){
// //     return num1 +  num2
// // }
// // const obj :{
// //     name:string,
// //     age:number
// // } ={
// //     name:"Ali",
// //     age:40
// // }
// // const s = addNumber(1,10)
// // console.log(s)
// // console.log(obj.name, obj.age)
// const per :{
//     name:string,
//     age:number
//     x:{
//         y:number,
//         z:boolean
//     }
// } = {
//     name:"omid",
//     age:42,
//     x:{
//         y:20605,
//         z:true
//     }
// }
// console.log(per.x.y)
// const x:(string|number|boolean)[] = ["omid", "saeed", 1254, true]
// const y :any[]  = ["omid", 45, true, 12.3]
// console.log(x)
// const q :Array<string|object| number|boolean>  = [14,2, "saeed", true, {age:38, name:"saeed"}]
// console.log(q)
// let f :[string, null, number, object] = ["omid",null, 12, {"ade":0}]
// console.log(f)
// let data:any = 4
// console.log(data)
// data="omid"
// console.log(data)
// enum Personal {NAME="omid", MALE=0, FEMAL=1}
// const obj2 : {
//     name:Personal,
//     gender:Personal,
//     age:number,
//     x:{
//         id:number,
//         city:string
//     }
// } = {
//     name:Personal.NAME,
//     gender:Personal.FEMAL,
//     age:18,
//     x:{
//         id:18,
//         city:"humborg"
//     }
// }
// console.log(obj2)
// // 
var Personal;
(function (Personal) {
    Personal["NAME"] = "Omid";
    Personal[Personal["FMALE"] = 0] = "FMALE";
    Personal[Personal["MALE"] = 1] = "MALE";
})(Personal || (Personal = {}));
const obj = {
    name: Personal.NAME,
    age: 30,
    gender: Personal.MALE
};
console.log(obj);
// 
// null type
const q = null;
// undefined type
const und = undefined;
const qq = null;
const namm = "Omid";
console.log(namm);
const ww = 45;
const we = 45;
const wr = 45;
const wt = 45;
let f2 = (num, num2) => {
    return num + num2;
};
console.log("f2", f2(30, 40));
