
/*

    Modifiers
    *********
    1) public
    2) private
    3) protected


1) public modifier
*******************
1) public modifiers are applicable to functions and variables and constructor

2) public modifiers are not applicable to classes

3) public members by default availability to child classes

4) we can access public members by using the class objects


*/



// public class class_one{}


class class_two{
    public var_one:string = "hello_1";

    public constructor(){

    }


    public fun_one():string{
        return "hello_2"
    }
}

let obj:class_two = new class_two();
console.log(obj.var_one,obj.fun_one());
//hello_1 hello_2





class class_three {
    public var_two:string = "angular";

    public fun_two():string{
        return "javascript"

    }
}


class class_four extends class_three{

}

let obj1:class_four = new class_four();
console.log(obj1.var_two,obj1.fun_two());
//angular javascript      





//private
//1) private modifiers are not applicable to classes
//2) private modifiers are applicable to variables and functions and constructors
//3) we can't create the object to the private constructor..
//4) we can access private members with in the class by using the this keyword...
//5) we can't access private members by using the class objects
//6) private members are not accessble to child classes....

//private class class_five{}
 


class class_six{
    private var_three:string="hello_1"

    private constructor(){

    }

    private fun_six():string{
         return "welcome2"
    }

}




// class class_seven{
//     private constructor(){

//     }
// }
// let obj4:class_seven  = new class_seven()




class class_test{
    private var_one:string;

    constructor(){
        this.var_one = "welcome to typescript"
    }
}


/*
class class_demo{
    private var_three:string
}

let obj5:class_demo = new class_demo();
console.log(obj5.var_three)
*/



/*
class class_ten{
    private var_one:string = "hi_1"
}

class class_eleven extends class_ten{

}

let obj6:class_eleven = new class_eleven();
console.log(obj6.var_one);
*/








//protected
//1) protected  modifier are not accessbile to class level
//2) protected  modifier applicable to varibles and functions and constructor also..
//3) protected  modifier members  are we can't access by using the class objects...
//4) we can't create object to the protected constructor.....
//5) protected members are availablity to the child classes




//  protected class class_10{

//  }



class class_11{
    protected var_one:string = "HELLO_1";

    protected constructor(){

    }

    protected fun_one():string{
        return "HELLO_2"
    }
}


/*
class class_12{
    protected var_one:string="welcome"
}

let obj7:class_12 = new class_12();
console.log(obj7.var_one);
*/




/*
class class_13{
    protected constructor(){

    }
}

let obj8:class_13 = new class_13();
*/





class class_14{
    protected var_one:string = "JAVA"
}

class class_15 extends class_14{
   public var_two:string = this.var_one;
}

let obj9:class_15 = new class_15();
console.log(obj9.var_two);
//JAVA