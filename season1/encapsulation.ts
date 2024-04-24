console.log("encapsulation")

class course {
    protected title:string="";
    public desc:string="";
    price:number=0;
    private teacher:string="";
    constructor(title:string, desc:string, price:number, teacher:string){
        this.title=title;
        this.desc=desc;
        this.price= price;
        this.teacher=teacher;
    }
    PrintCourse(){
        console.log(`course ${this.title} description ${this.desc} price ${this.price} teacher ${this.teacher}`)
    }
}

class PrintCourse extends course{
    PrintCourse(){
        console.log(`course ${this.title} description ${this.desc} price ${this.price}`)
    }
}

const c1 = new course("JAVA","Learning", 2000, "Sargazi")
console.log(c1.title)//
// c1.teacher="saeed"
c1.PrintCourse()




////////////////////////////////

class news {
    readonly title: string;
    constructor(n: string) {
      this.title = n;
    }
    printNews() {
      console.log(this.title);
    }
  }
  
  const ne = new news("Omid");
  ne.printNews();