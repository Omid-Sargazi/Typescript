console.log("Class")

class User{
    firstName:string;
    userGender:string
    constructor(name:string, gen:string){
        this.firstName=name
        this.userGender = gen 
    }

    gender(){
        console.log(`user gender is: `, this.userGender)
    }
}

const user = new User("Saeed", "male")
console.log(user.firstName, user.userGender)

const UU ={firstName:"Vahid", UU.userGender}

console.log((UU.firstName))