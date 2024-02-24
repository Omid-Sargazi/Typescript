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
enum Personal {NAME ="Omid", FMALE=0, MALE=1}
const obj :{
    name:Personal,
    age:number,
    gender:Personal
} ={
   name:Personal.NAME,
   age:30,
   gender:Personal.MALE

}

console.log(obj)
// 

// null type
const q:null = null;
// undefined type
const und:undefined = undefined

const qq :string|null = null;

const namm :"Omid" = "Omid";
console.log(namm)

////////////////////////////////////
// const ww :string|number = 45;
// const we :string|number = 45;
// const wr :string|number = 45;
// const wt :string|number = 45;

// aliases is a custom type
type WAliases = string|number
const ww:WAliases  = 45
const we:WAliases  = 45
const wr:WAliases  = 45
const wt:WAliases  = 45
type func = (num1:number, num2:number)=>number

let f2:func=(num, num2)=>{
    return num+ num2
}

console.log("f2",f2(30,40))





