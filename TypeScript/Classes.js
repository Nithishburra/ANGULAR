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
var class_one = /** @class */ (function () {
    function class_one() {
        this.sub_one = "hello_1";
        this.sub_two = "hello_2";
        this.sub_three = "hello_3";
    }
    return class_one;
}());
var obj = new class_one();
console.log(obj.sub_one, obj.sub_two, obj.sub_three); //hello_1 hello_2 hello_3
var class_two = /** @class */ (function () {
    function class_two() {
        this.var_one = "hi";
        this.var_two = "angular";
        this.var_three = "class";
    }
    return class_two;
}());
var obj1 = new class_two();
console.log(obj1.var_one, obj1.var_two, obj1.var_three); //hi angular class
var class_three = /** @class */ (function () {
    function class_three() {
        this.test_one = "welcome";
        this.test_two = "angular";
        this.test_three = "angular13";
    }
    return class_three;
}());
var obj3 = new class_three();
console.log(obj3.test_one, obj3.test_two, obj3.test_three); //welcome angular angular13
var Test = /** @class */ (function () {
    function Test(arg1, arg2, arg3) {
        this.var_one = arg1;
        this.var_two = arg2;
        this.var_three = arg3;
    }
    return Test;
}());
var obj4 = new Test("hello_1", "hello_2", "hello_3");
console.log(obj4.var_one, obj4.var_two, obj4.var_three); //hello_1 hello_2 hello_3
var obj5 = new Test("welcome", "to", "typescript");
console.log(obj5.var_one, obj5.var_two, obj5.var_three); //welcome to typescript
var Demo = /** @class */ (function () {
    function Demo(arg1, arg2, arg3) {
        this.sub_one = arg1;
        this.sub_two = arg2;
        this.sub_three = arg3;
    }
    return Demo;
}());
var obj6 = new Demo("hi", "all", 123); //hi all 123
console.log(obj6.sub_one, obj6.sub_two, obj6.sub_three);
var obj7 = new Demo("hey", "how is", 45);
console.log(obj7.sub_one, obj7.sub_two, obj7.sub_three); //hey how is 45
var class_seven = /** @class */ (function () {
    function class_seven() {
        this.var_one = "hello_1";
        this.var_two = "hello_2";
        this.var_three = "hello_3";
    }
    class_seven.prototype.getVarOne = function () {
        return this.var_one;
    };
    class_seven.prototype.getVarTwo = function () {
        return this.var_two;
    };
    class_seven.prototype.getVarthree = function () {
        return this.var_three;
    };
    return class_seven;
}());
var obj10 = new class_seven();
console.log(obj10.getVarOne(), obj10.getVarTwo(), obj10.getVarthree()); //hello_1 hello_2 hello_3
var class_ten = /** @class */ (function () {
    function class_ten() {
        this.sub_one = "js";
        this.sub_two = "adv java";
        this.sub_three = "spring";
    }
    class_ten.prototype.getSubone = function () {
        return this.sub_one;
    };
    class_ten.prototype.getSubtwo = function () {
        return this.sub_two;
    };
    class_ten.prototype.getSubThree = function () {
        return this.sub_three;
    };
    return class_ten;
}());
var obj11 = new class_ten();
console.log(obj11.getSubone(), obj11.getSubThree(), obj11.getSubtwo()); //js spring adv java
var class_100 = /** @class */ (function () {
    function class_100(arg1, arg2, arg3) {
        this.arg1 = arg1;
        this.arg2 = arg2;
        this.arg3 = arg3;
    }
    return class_100;
}());
var obj99 = new class_100("hello_1", "hello_2", "hello_3");
console.log(obj99.arg1, obj99.arg2, obj99.arg3); //hello_1 hello_2 hello_3
var obj100 = new class_100("welcome_1", "welcome2", "welcome3");
console.log(obj100.arg1, obj100.arg2, obj100.arg3); //welcome_1 welcome2 welcome3
var class_thousand = /** @class */ (function () {
    function class_thousand(arg1) {
        this.arg1 = arg1;
    }
    return class_thousand;
}());
var class_hundred = /** @class */ (function () {
    function class_hundred() {
        this.var_one = "hello world";
    }
    return class_hundred;
}());
var obj35 = new class_thousand(new class_hundred());
console.log(obj35.arg1.var_one); //hello world
var class_1 = /** @class */ (function () {
    function class_1(arg1) {
        this.arg1 = arg1;
    }
    return class_1;
}());
var class_2 = /** @class */ (function () {
    function class_2() {
        this.var_two = "welcome to javascript";
    }
    return class_2;
}());
var obj98 = new class_1(new class_2());
console.log(obj98.arg1.var_two); //welcome to javascript
var class_first = /** @class */ (function () {
    function class_first(obj1, obj2, obj3) {
        this.obj1 = obj1;
        this.obj2 = obj2;
        this.obj3 = obj3;
    }
    return class_first;
}());
var class_second = /** @class */ (function () {
    function class_second() {
        this.sub_one = "welcome to js";
    }
    return class_second;
}());
var class_third = /** @class */ (function () {
    function class_third() {
        this.sub_three = "welcome to angular";
    }
    return class_third;
}());
var class_four = /** @class */ (function () {
    function class_four() {
        this.sub_four = "welcome to typescript";
    }
    return class_four;
}());
var objfive = new class_first(new class_second(), new class_third(), new class_four());
console.log(objfive.obj1.sub_one);
console.log(objfive.obj2.sub_three);
console.log(objfive.obj3.sub_four);
//welcome to js
//welcome to angular
//welcome to typescript
var class_polo = /** @class */ (function () {
    function class_polo() {
    }
    class_polo.prototype.fun_one = function () {
        return "hello_1";
    };
    class_polo.prototype.fun_two = function () {
        return "hello_2";
    };
    class_polo.prototype.fun_three = function () {
        return "hello_3";
    };
    return class_polo;
}());
;
var obj45 = new class_polo();
console.log(obj45.fun_one(), obj45.fun_two(), obj45.fun_three());
//hello_1 hello_2 hello_3
var class_demo = /** @class */ (function () {
    function class_demo(arg1) {
        this.var_one = arg1;
    }
    class_demo.prototype.fun_one = function () {
        return this.var_one;
    };
    return class_demo;
}());
var obj75 = new class_demo("hello");
console.log(obj75.fun_one()); //hello
var class_hello = /** @class */ (function () {
    function class_hello(arg2) {
        this.var_two = arg2;
    }
    class_hello.prototype.fun_one = function () {
        return this.var_two;
    };
    return class_hello;
}());
var obj32 = new class_hello("welcome");
console.log(obj32.fun_one());
