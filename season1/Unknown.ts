console.log("Unknown")

let T:any;
let t:unknown;
let H:string;
t="omid"
H="Saeed";
T="Vaid"
T=12;
t=13

console.log(typeof(T))
console.log(typeof(t))
console.log(typeof(H))

if(typeof (t) === H){
    T=H
    console.log(H)
}
console.log(H,T,t,"    out of if")