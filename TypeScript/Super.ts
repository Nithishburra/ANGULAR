/*

Super keyword
**************

1) child class will call the  parent class members by using the super() keyword
2) the super keyword we will not accessible to variables.


*/



class Parent{
    constructor(public arg1:any){

    }
}

class Child extends Parent{
    constructor(public arg1:any, public arg2:any){
        super(arg1)
    }
}


class Subchild extends Child{
    constructor(public arg1:any,public arg2:any,public arg3:any){
        super(arg1,arg2)
    }
}

let obj:Subchild = new Subchild("hello_1","hello_2","hello_3");
console.log(obj.arg1,obj.arg2,obj.arg3);
//hello_1 hello_2 hello_3











class Parent1{

    constructor(public arg1:any,public arg2:any){

    }

}

class Child1 extends Parent1{
    constructor(public arg1:any, public arg2:any ,public arg3:any){
        super(arg1,arg2)
    }
}

class Subchild1 extends Child1{
    constructor(public arg1:any, public arg2:any , public arg3:any, public arg4:any){
        super(arg1,arg2,arg3)
    }
}

let obj1:Subchild1 = new Subchild1("angular","javascript","typescript","vuejs");
console.log(obj1.arg1,obj1.arg2,obj1.arg3,obj1.arg4);
//angular javascript typescript vuejs







class Parent2{
    fun_one():any{
        return "welcome to this Typescript"
    }
}


class Child2 extends Parent2{
    fun_two():any{
        return super.fun_one();
    }
}
let obj2:Child2 = new Child2();
console.log(obj2.fun_two());
//welcome to this Typescript









class Parent3{

    fun_one():string{
        return "HI HELLO HOW ARE YOU!"
    }
}

class Child3 extends Parent3{
    fun_two():string{
        return super.fun_one()
    }
}

let obj3:Child3 = new Child3();
console.log(obj3.fun_two());

//HI HELLO HOW ARE YOU!



