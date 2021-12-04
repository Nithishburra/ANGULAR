/*

polymorphism
************
1) it behaves like one form can have many functionalities.

  there are two types of polymorphism

  1) function overriding
  2) function overloading


  1) function overriding means overriding the parent class functionality with child class functionality called as function overriding..



  2) inheritance is must be required for function overriding..





*/



class Parent{
    earn():any{
        return "parent earned 1cr rupees"
    }
}

class Child extends Parent{
    earn():any{
        return " child earned 10crore rupees"
    }
}


let obj:Child = new Child();
console.log(obj.earn());
// child earned 10crore rupees







class Parent1{
    dbfun():string{
        return "oracle db conncetion"
    }
}

class Child1 extends Parent1{
    dbfun():string{
        return "sql db connection"
    }
}

class subchild extends Child1{
    dbfun():string{
        return "rabitMQ db connection"
    }
}


let obj1:subchild = new subchild();
console.log(obj1.dbfun());
//rabitMQ db connection







class Parent2{
    add():any{
        return 30*2;
    }

    add1():any{
        return "hello";
    }
}

class Child2 extends Parent2{

    add():any{
        return 90+2;
    }

    add1():any{
         return "hello man"
   }
}

let obj2:Child2 = new Child2();
console.log(obj2.add(),obj2.add1())
//92 hello man














//overloading
// same "functionality" with same "parameters" is called as function overloading.



class class_one{
    fun_one(arg1:number,arg2:number):any;
    fun_one(arg1:string,arg2:string):any;
    fun_one(arg1:boolean,arg2:boolean):any;
    fun_one(arg1:string,arg2:number):any;
    fun_one(arg1:any,arg2:any):any{
        console.log(arg1+arg2);
    }
};
let obj3:class_one = new class_one();
obj3.fun_one(10,20);                                   //30
obj3.fun_one("10","10");                               //1010
obj3.fun_one("hello1","bye");                          //hello1bye   
obj3.fun_one("hi",10);                                 //hi10
//obj3.fun_one(10,"hi");                   //No overload matches this call.

                   




class class_two{
    fun_two(arg1:string,arg2:number):any;
    fun_two(arg1:number,arg2:number):any;
    fun_two(arg1:boolean,arg2:string):any;

    fun_two(arg1:any,arg2:any):any{
        console.log(arg1+arg2);
    }
}


let obj4:class_two = new class_two();
 obj4.fun_two("hi",10);                                //hi10
 obj4.fun_two(10,50);                                  //60
 obj4.fun_two(false,"hello");                         //falsehello









