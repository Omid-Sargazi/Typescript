"use strict";
console.log("NestedObjects");
const person = {
    name: "Saeed",
    age: 38,
    id: 120,
    lastName: "sargazi",
    details: {
        job: "programming",
        language: "PHP"
    }
};
console.log(person.details.job);
let x = ["omid", "12"];
console.log(x[1]);
let y = ["omid", 12];
console.log(y[1], y[0]);
let z = ["saeed", null, true, 123, { name: "Mika" }];
console.log(z[0], z[1], z[4]);
///////////////////////Readonly/////////////////////////
