/*

     static keyword
     ***** ***********

   1) we can access static members directly by class names


   2) we can't access the static members by using the class objects


   3) we can't initialize static members by using the constructor


   4) we can't access the private constructor outside of the class by creating the object ..we can access only inside of the class


*/
var class_one = /** @class */ (function () {
    function class_one() {
    }
    class_one.fun_one = function () {
        return "HI";
    };
    class_one.var_one = "HELLO";
    return class_one;
}());
var obj = new class_one();
console.log(class_one.fun_one(), class_one.var_one);
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
var class_four = /** @class */ (function () {
    function class_four() {
    }
    class_four.fun_one = function () {
        return new class_four();
    };
    class_four.prototype.fun_two = function () {
        return "WELCOME TO TS";
    };
    return class_four;
}());
console.log(class_four.fun_one().fun_two());
//WELCOME TO TS
var class_five = /** @class */ (function () {
    function class_five() {
    }
    class_five.fun_two = function () {
        return new class_five();
    };
    class_five.prototype.fun_three = function () {
        return "WELCOME TO ANGULAR";
    };
    return class_five;
}());
console.log(class_five.fun_two().fun_three());
