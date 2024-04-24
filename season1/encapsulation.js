"use strict";
console.log("encapsulation");
class course {
    constructor(title, desc, price, teacher) {
        this.title = "";
        this.desc = "";
        this.price = 0;
        this.teacher = "";
        this.title = title;
        this.desc = desc;
        this.price = price;
        this.teacher = teacher;
    }
    PrintCourse() {
        console.log(`course ${this.title} description ${this.desc} price ${this.price} teacher ${this.teacher}`);
    }
}
class PrintCourse extends course {
    PrintCourse() {
        console.log(`course ${this.title} description ${this.desc} price ${this.price}`);
    }
}
const c1 = new course("JAVA", "Learning", 2000, "Sargazi");
console.log(c1.title); //
// c1.teacher="saeed"
c1.PrintCourse();
////////////////////////////////
class news {
    constructor(n) {
        this.title = n;
    }
    printNews() {
        console.log(this.title);
    }
}
const ne = new news("Omid");
ne.printNews();
//////////////////////////////////////////////////////////
class profile {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Profile {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    printResult() {
        console.log(`my name is ${this.name} and my age is ${this.age}`);
    }
}
class Favorite extends Profile {
    constructor(name, age, fav) {
        super(name, age);
        this.name = name;
        this.age = age;
        this.fav = fav;
    }
    // printResult()
    // {
    //     console.log(`my name is ${this.name} and my age is ${this.age}`)
    // }
    addFavorite(text) {
        this.fav.push(text);
    }
    printFavorite() {
        console.log(`their favorite are ${this.fav}`);
    }
}
const inh = new Favorite("omid", 42, []);
inh.addFavorite("climbing");
inh.addFavorite("gym");
inh.addFavorite("developer");
inh.printResult();
inh.printFavorite();
const pro = new Profile("omid", 42);
pro.printResult();
