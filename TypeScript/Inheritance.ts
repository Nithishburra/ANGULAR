/*inheritance
*****************

1) getting the data from the parent class to child class is known as inheritance.

2) we will implement the inheritance with the extends keyword..

3) we have 5 types of inheritances

   1) single level inheritance

   2) multi level inheritance

   3) multiple inheritance

   4) hirarchial inheritance

   5) hybrid inheritance

*/


/*
single level inheritance
*************************

class Parent{
    var_one:string="hello_1";
}
class child extends Parent{
       var_two:string="hello_2";
}

let obj:child = new child();
console.log(obj.var_one,obj.var_two);
//hello_1 hello_2


let obj1:Parent = new Parent();
console.log(obj1.var_one);
//hello_1




let obj2:Parent = new child();    //parent class holding the child class object
console.log(obj2.var_one);//hello_1


//let obj3:Child = new child();-> child class can't hold the parent class object..

*/






/*
class Parent{
    var_one:string = "hello_1"
    fun_one():string{
        return this.var_one;
    };
};


class Child extends Parent{
    var_two:string = "hello_2"
    fun_two():string{
        return this.var_two;
    }
}

let obj:Child = new Child();
console.log(obj.fun_one(),obj.fun_two());
//hello_1 hello_2
*/




/*
  multi level Inheritance
  ********************
class Parent{
    var_one:string ="welcome_1";
    
}
class Child extends Parent{
    var_two:string = "welcome_2";
}

class Subchild extends Child{
    var_three:string = "welcome_3";
}

let obj:Parent = new Parent();
console.log(obj.var_one);
//welcome_1

let obj1:Child = new Child();
console.log(obj1.var_one,obj1.var_two);
//welcome_1 welcome_2

let obj2:Subchild  = new Subchild();
console.log(obj2.var_one,obj2.var_two,obj2.var_three);
//welcome_1 welcome_2 welcome_3

*/





/*
multiple inheritance
******************
1) in typescript multiple inheritance is not supported
class Parent1{}

class Parent2{}


class Child extends Parent1,Parent2{}
*/





/*

hirarchial inheritance
*********************

class Parent{
    var_one:string="hi_1"
}

class Child1 extends Parent{
    var_two:string = "hi_2"
}


class Child2 extends Parent{
    var_two:string = "hi_3"
}

class Child3 extends Parent{
    var_three:string = "hi_4"
}

let obj1:Parent = new Parent();
console.log(obj1.var_one);           //hi_1

let obj2:Child1 = new Child1();
console.log(obj2.var_one,obj2.var_two); //hi_1 hi_2

let obj3:Child2 = new Child2();
console.log(obj3.var_one,obj3.var_two); //hi_1 hi_3

let obj4:Child3 = new Child3();
console.log(obj4.var_one,obj4.var_three); //hi_1 hi_4


*/





/*
 hybrid Inheritance
 *****************
class Parent{}

class Child1 extends Parent{}

class Child2 extends Parent{}

class Subchild extends Child1,Child2{}

//hybrid inheritance is not supported typescript

*/

