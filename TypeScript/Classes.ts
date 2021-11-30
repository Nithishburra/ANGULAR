/*classes
*********
1) class is nothing but collection of variables and funtions..

2) we will define the class by using "class" keyword..

3) we will create object to the class by using the "new" keyword..

4) we have the following modifiers...

    1) public 

    2) private

    3) protected

 5) recommended modifier for  variables is "private"..

 6) recommended modifier for function is "public"

 7) we will define constructor by using the "constructor" keyword..

 **/



 class class_one{
     sub_one:string = "hello_1";
     sub_two:string ="hello_2";
     sub_three:string = "hello_3"
 }

 let obj:class_one = new class_one();
 console.log(obj.sub_one,obj.sub_two,obj.sub_three);    //hello_1 hello_2 hello_3


class class_two{
    var_one:string = "hi";
    var_two:string = "angular";
    var_three:string = "class"
}
let obj1:class_two = new class_two();
console.log(obj1.var_one,obj1.var_two,obj1.var_three);   //hi angular class


class class_three{
       test_one:string = "welcome";
       test_two:string = "angular";
       test_three:string = "angular13"
}
let obj3:class_three = new class_three();
console.log(obj3.test_one,obj3.test_two,obj3.test_three); //welcome angular angular13



class Test{
       var_one:string;
       var_two:string;
       var_three:string;
       constructor(arg1:string,arg2:string,arg3:string){
           this.var_one =arg1;
           this.var_two = arg2;
           this.var_three = arg3;
       }
    }

     let obj4:Test = new Test("hello_1","hello_2","hello_3");
       console.log(obj4.var_one,obj4.var_two,obj4.var_three); //hello_1 hello_2 hello_3

     let obj5:Test = new Test("welcome","to","typescript");
     console.log(obj5.var_one,obj5.var_two,obj5.var_three); //welcome to typescript



class Demo{
    sub_one:string;
    sub_two:string;
    sub_three:number
    constructor(arg1:string,arg2:string,arg3:number){
        this.sub_one = arg1;
        this.sub_two = arg2;
        this.sub_three = arg3;
    }
}

let obj6:Demo = new Demo("hi","all",123);        //hi all 123
console.log(obj6.sub_one,obj6.sub_two,obj6.sub_three); 



let obj7:Demo = new Demo("hey","how is",45);
console.log(obj7.sub_one,obj7.sub_two,obj7.sub_three);//hey how is 45






class class_seven{
   private var_one:string;
   private var_two:string;
   private var_three:string;

  constructor(){
      this.var_one = "hello_1";
      this.var_two = "hello_2";
      this.var_three = "hello_3";
  }
 public getVarOne():string{
      return this.var_one;
  }
 public getVarTwo():string{
       return this.var_two;
  }
 public getVarthree():string{
      return this.var_three
  }
}
let obj10:class_seven= new class_seven();                               
console.log(obj10.getVarOne(),obj10.getVarTwo(),obj10.getVarthree()); //hello_1 hello_2 hello_3


class class_ten{
    private sub_one:string;
    private sub_two:string;
    private sub_three:string;

    constructor(){
        this.sub_one = "js";
        this.sub_two = "adv java";
        this.sub_three = "spring";
    }
     public getSubone():string{
         return this.sub_one;
     }
     public getSubtwo():string{
         return this.sub_two;
     }
     public getSubThree():string{
         return this.sub_three;
     }
}

let obj11:class_ten = new class_ten();
console.log(obj11.getSubone(),obj11.getSubThree(),obj11.getSubtwo()); //js spring adv java






class class_100{
    constructor(public arg1:any,public arg2:any,public arg3:any){}
}

let obj99:class_100 = new class_100("hello_1","hello_2","hello_3");
console.log(obj99.arg1,obj99.arg2,obj99.arg3);//hello_1 hello_2 hello_3

let obj100:class_100 = new class_100("welcome_1","welcome2","welcome3");
console.log(obj100.arg1,obj100.arg2,obj100.arg3); //welcome_1 welcome2 welcome3







class class_thousand{
    constructor(public arg1:any){}
}

class class_hundred{
    var_one:string = "hello world"
}

let obj35:class_thousand = new class_thousand(new class_hundred());
console.log(obj35.arg1.var_one);       //hello world



class class_1{
    constructor(public arg1:any){}
}

class class_2{
    var_two:string = "welcome to javascript";
}
let obj98:class_1 = new class_1(new class_2());
console.log(obj98.arg1.var_two);                      //welcome to javascript




class class_first{
    constructor(public obj1:any,public obj2:any, public obj3:any){}
}

class class_second{
    sub_one:string = "welcome to js";
}

class class_third{
    sub_three:string = "welcome to angular";
}

class class_four{
    sub_four:string = "welcome to typescript";
}

let objfive:class_first = new class_first(new class_second(),new class_third(),new class_four());
console.log(objfive.obj1.sub_one);
console.log(objfive.obj2.sub_three);
console.log(objfive.obj3.sub_four);
//welcome to js
//welcome to angular
//welcome to typescript


class class_polo{
    fun_one():string{
        return "hello_1"
    }

    fun_two():string{
        return "hello_2"
    }
    fun_three():string{
        return "hello_3"
    }
};

let obj45:class_polo= new class_polo();
console.log(obj45.fun_one(),obj45.fun_two(),obj45.fun_three());
//hello_1 hello_2 hello_3


class class_demo{
   private var_one:string;

   constructor(arg1:string){
       this.var_one=arg1;
   }
     public fun_one():string{
         return this.var_one;
     }
}
let obj75:class_demo = new class_demo("hello");
console.log(obj75.fun_one());    //hello



class class_hello{
    private var_two:string;

    constructor(arg2:string){
        this.var_two= arg2;
    }
    public fun_one():string{
        return this.var_two;
    }
}
let obj32:class_hello = new class_hello("welcome");
console.log(obj32.fun_one());
//welcome

