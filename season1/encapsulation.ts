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


  //////////////////////////////////////////////////////////

class profile
{
    public name:string;
    public age:number;
    constructor(name:string, age:number)
    {
        this.name=name;
        this.age=age;
    }
}

class Profile
{
    constructor(public name:string, public age:number){
    }
    printResult()
    {
        console.log(`my name is ${this.name} and my age is ${this.age}`)
    }
}

class Favorite extends Profile
{
    constructor(public name:string, public age:number, public fav:string[])
    {
        super(name, age)
    }
    // printResult()
    // {
    //     console.log(`my name is ${this.name} and my age is ${this.age}`)
    // }
    addFavorite(text:string)
    {
        this.fav.push(text);
    }

    printFavorite()
    {
        console.log(`their favorite are ${this.fav}`)
    }
}


const inh = new Favorite("omid",42, [])
inh.addFavorite("climbing")
inh.addFavorite("gym")
inh.addFavorite("developer")
inh.printResult()

inh.printFavorite()


const pro = new Profile("omid", 42)

pro.printResult();

//////////////////////////////Get & Set////////////////////////////

class GetAndSet
{
    constructor(private number:number)
    {

    }
    
    get numberValue()
    {
        return this.number
    }
    set numberValue(number:number)
    {
        this.number = number;
    }
}

class GetAndSetChild extends GetAndSet
{
    printVAlue()
    {
        console.log(this.numberValue)
    }
    
}

const getandsetChild = new GetAndSetChild(12);

getandsetChild.numberValue=225;
getandsetChild.printVAlue()











