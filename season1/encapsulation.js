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
