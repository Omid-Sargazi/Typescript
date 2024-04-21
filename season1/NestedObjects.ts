console.log("NestedObjects")

const person :{
    name:string;
    age:number;
    id:number;
    lastName:string;
    details:{
        job:string;
        language:string;
    }
}={
    name:"Saeed",
    age:38,
    id:120,
    lastName:"sargazi",
    details:{
        job:"programming",
        language:"PHP"
    }
}

console.log(person.details.job)


let x:string[] = ["omid", "12"]
console.log(x[1])


let y:(string|number)[] = ["omid", 12]
console.log(y[1], y[0])

let z:any[]=["saeed", null, true, 123,{name:"Mika"}]
console.log(z[0],z[1],z[4])