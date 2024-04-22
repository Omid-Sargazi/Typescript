console.log("Aliases");

const w: string | number = 25;
const w2: string | number = "omid";
const w3: string | number = "Saeed";

console.log(w, w2, w3);



type wAlias = string | number
const w4 : wAlias = "Mika"
const w5 : wAlias = "Amin"

console.log(w4,w5)


type func = (num1:number, num2:number)=>number

let f2:func = (num1, num2)=>{
    return num1+num2
}


console.log(f2(4,5))
/////////////////////////////////////////////////

let Add:(a:number, b:number)=>number = (a, b)=>{
    return a+b
}


let Print:(num:number)=>void=(n)=>{
    console.log(n)
}
Print(Add(50,60))

console.log(Add(10,20))


/////////////////////////////////////
type CallBack = (a:number, b:number, cb:(num:number)=>void)=>void;

let AddCallBack :CallBack=(a,b,cb)=>{
    const result = a+b
    cb(result)
}

AddCallBack(100, 200, (res)=>{
    console.log(res)
})
