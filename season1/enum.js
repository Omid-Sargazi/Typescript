"use strict";
console.log("enum");
var Personal;
(function (Personal) {
    Personal["Name"] = "Sara";
    Personal[Personal["Male"] = 0] = "Male";
    Personal[Personal["FMale"] = 1] = "FMale";
})(Personal || (Personal = {}));
const objectEnum = {
    name: Personal.Name,
    lastName: "sar",
    age: 22,
    gender: Personal.Male
};
if (objectEnum.gender === 1) {
    console.log(objectEnum);
}
else {
    console.log(objectEnum);
}
