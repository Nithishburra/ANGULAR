/*

     static keyword
     ***** ***********

   1) we can access static members directly by class names


   2) we can't access the static members by using the class objects


   3) we can't initialize static members by using the constructor


   4) we can't access the private constructor outside of the class by creating the object ..we can access only inside of the class


*/


class class_one{
    static var_one:string ="HELLO";

    static fun_one():string{
        return "HI"
    }
}

let obj:class_one = new class_one();
console.log(class_one.fun_one(),class_one.var_one);
//HI HELLO


/*
class class_two{
    static var_two:string;

    constructor(){
        return this.var_two = "hello_1"
    }
}
*/




/*
class class_three{
    static var_three:string = "hello_99";

    static fun_one():string{
        return "hello_100"
    }
}

let obj:class_three = new class_three();
console.log(obj.var_three,obj.fun_one())
*/









class class_four{

    private constructor(){

    }

    static fun_one(){
        return new class_four();
    }

    fun_two():any{
        return "WELCOME TO TS"
    }
}

console.log(class_four.fun_one().fun_two());

//WELCOME TO TS




class class_five{
    private constructor(){

    }
    static fun_two(){
        return new class_five();
    }

    fun_three():any{
        return "WELCOME TO ANGULAR"
    }
}

console.log(class_five.fun_two().fun_three());

//WELCOME TO ANGULAR







