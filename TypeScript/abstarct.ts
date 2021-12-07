//when ever we know the partial implementation then we will choose abstract classes
//will we declare abstact classses by using "abstract" keyword..


/*
 abstract class class_one{
    fun_one():any{
        return "hello_1"
    }

    abstract fun_two():any;
}

class class_two extends class_one{

    fun_two():any{
        return "hello_2";
    }
};

let obj:class_two = new class_two();
console.log(obj.fun_one(),obj.fun_two());
//hello_1 hello_2
*/








 abstract class class_one{
    abstract fun_one():any;
}
 
abstract class class_two extends class_one{

    fun_one():any{
        return "hi angular"
    }

  abstract fun_two():any;
}


class class_three extends class_two{
    
    fun_two():any{
        return "hi typescript"
    }

    fun_three():any{
        return "hi javascript"
    }
}
let obj:class_three = new class_three();
console.log(obj.fun_one(),obj.fun_two(),obj.fun_three());

//hi angular hi typescript hi javascript















interface interface1{
    fun_one():any;
}

interface interface2 extends interface1{
    fun_two():any;
}

 abstract class class_four implements interface2{
      
       fun_one():any{
           return "hello_1";
       }

       fun_two():any{
           return "hello_2"
       }

     abstract fun_three():any;

}

class class_five extends class_four{

       fun_three():any{
           return "hello_3"
       }
};


let obj1:class_five = new class_five();
console.log(obj1.fun_one(),obj1.fun_two(),obj1.fun_three());
//hello_1 hello_2 hello_3








 