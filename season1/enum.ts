console.log("enum")


enum Personal {Name="Sara",Male=0,FMale=1}

const objectEnum:{
    name:Personal;
    lastName:string;
    age:number;
    gender:Personal
}={
    name:Personal.Name,
    lastName:"sar",
    age:22,
    gender:Personal.Male
}

if(objectEnum.gender===1){

    console.log(objectEnum)
}else{
    console.log(objectEnum)

}
